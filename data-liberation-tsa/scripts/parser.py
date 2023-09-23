import argparse
import csv
import pathlib
import re

import pdfplumber

MONTHS_TO_NUMBERS = {
    "October": "10",
    "November": "11",
    "December": "12",
    "January": "01",
    "February": "02",
    "March": "03",
    "April": "04",
    "May": "05",
    "June": "06",
    "July": "07",
    "August": "08",
    "September": "09",
}

NUMBERS_TO_MONTHS = {v: k for k, v in MONTHS_TO_NUMBERS.items()}


def get_line_type(chars):
    """
    Assigns line type to each line according to distance of leftmost character
    from left side of page.
    """
    x0 = chars[0]["x0"]
    if x0 < 14:
        return "table-header"
    if x0 < 20:
        return "airport"
    elif x0 < 34:
        return "year"
    elif x0 < 45:
        return "category"
    elif x0 < 57:
        return "subcategory"
    elif x0 < 175:
        return "end"
    else:
        return "start"


def old_get_line_type(chars):
    """
    Assigns line type to each line according to distance of leftmost character
    from left side of page.
    """
    x0 = chars[0]["x0"]
    if x0 < 14:
     return "table-header"
    if x0 < 20:
        return "airport"
    elif x0 < 33:
        return "year"
    elif (
        x0 < 43
    ):  # marginally different here, they switched how they ran columns after this
        return "category"
    elif x0 < 55:
        return "subcategory"
    elif x0 < 175:
        return "end"
    else:
        return "start"


def month_parse(chars):
    """
    Given the characters representing complaint data by month, returns a list
    that includes 0s for months in which there were no complaints fitting the
    category or subcategory. Achieves this by using the x0 attribute of the
    characters.
    """
    months = [0] * 12  # set each  month to 0

    for (
        char
    ) in (
        chars
    ):  # could at some point get rid of conditionals, would make more efficient
        if char["text"] == ",":
            continue  # converting ',' to int gives us problems, must skip
        val = int(char["text"])  # integer value of character
        x0 = char["x0"]

        if x0 < 220:
            if x0 > 185:  # don't want to randomly catch wrong data
                months[0] = 10 * months[0] + val
        elif x0 < 252:
            months[1] = 10 * months[1] + val
        elif x0 < 285:
            months[2] = 10 * months[2] + val
        elif x0 < 315:
            months[3] = 10 * months[3] + val
        elif x0 < 350:
            months[4] = 10 * months[4] + val
        elif x0 < 380:
            months[5] = 10 * months[5] + val
        elif x0 < 410:
            months[6] = 10 * months[6] + val
        elif x0 < 440:
            months[7] = 10 * months[7] + val
        elif x0 < 470:
            months[8] = 10 * months[8] + val
        elif x0 < 500:
            months[9] = 10 * months[9] + val
        elif x0 < 540:
            months[10] = 10 * months[10] + val
        elif x0 < 570:
            months[11] = 10 * months[11] + val

    return months


def parse_line_chars(chars, line_type_getter):
    """
    For a given line, returns the line's "header" (description?), the line's text,
    (not currently used) the line's month_data, the total data for that year/category,
    and the line's type.
    """
    line_type = line_type_getter(chars)
    text = pdfplumber.utils.extract_text(chars)

    length = len(chars)
    if line_type != "year":  # find where month_data starts
        i = 0
        while i < length:
            if text[i].isnumeric():
                break
            i += 1
    else:  # different approach needed for years
        i = 4

    elements = text[i:].split()
    total_data = elements[-1]  # last element will always be the total

    last_element_digits = len(total_data)

    total_data = int(total_data.replace(",", ""))

    digit_chars = [
        c for c in chars[i - 1 : length - last_element_digits] if c["text"].isdigit()
    ]

    month_data = month_parse(digit_chars)  # call month_parse

    if sum(month_data) < 999:
        if sum(month_data) == int(total_data) + 75:
            month_data[0] = 0
        elif sum(month_data) == int(total_data) + 12:
            month_data[1] = 0

    header = (
        text[: i - 1] if not text[i - 1].isnumeric() else text[:i]
    )  # this accounts for year line type

    return {  # returns all of this information as a dictionary
        "header": header,
        "line": text,
        "month_data": month_data,
        "total_data": total_data,
        "line_type": line_type,
    }


def parse_pdf(pdf, pdf_year, pdf_month, max_pages=None):
    rows_months = []
    rows_totals = []
    airport_code = None
    year = None
    category = None
    min_date = "9999-12"
    max_date = "0000-01"

    for page in pdf.pages[:max_pages]:
        print(f"Parsing page {page.page_number: >3}")
        chars_by_line = pdfplumber.utils.cluster_objects(page.chars, "top", tolerance=2)
        num_lines = len(chars_by_line)
        for j, line in enumerate(chars_by_line):  # loops over each line in page
            if j == 0 or j == 1 or j == num_lines - 1:
                continue

            if pdf_year == "2019" and pdf_month in ["02", "04"]:
                line_type_getter = old_get_line_type
            else:
                line_type_getter = get_line_type

            parsed = parse_line_chars(line, line_type_getter)
            if parsed["line_type"] == "table-header":
                continue #catches one bug 
            # these three conditionals are setting values for csv
            if parsed["line_type"] == "airport":
                airport_code = parsed["header"][:3]
                if airport_code == "z N":
                    airport_code = "N/A"
                continue
            elif parsed["line_type"] == "year":
                year = parsed["header"]
            elif parsed["line_type"] == "category":
                category = parsed["header"]

            if sum(parsed["month_data"]) != parsed["total_data"]:
                print("ERROR HERE") 
                print(parsed["header"])
                print(parsed["month_data"])
                print(parsed["total_data"])
                exit()

            common_values = {
                "PDF Report Date": f"{pdf_year}-{pdf_month}",
                "Airport": airport_code,
                "Category": category
                if parsed["line_type"] not in ["airport", "year"]
                else None,
                "Subcategory": parsed["header"]
                if parsed["line_type"] == "subcategory"
                else None,
            }

            row_total = common_values.copy()
            row_total["Year"] = year if parsed["line_type"] != "airport" else None
            row_total["Count"] = parsed["total_data"]
            rows_totals.append(row_total)

            for idx, month in enumerate(MONTHS_TO_NUMBERS.keys()):
                mon = MONTHS_TO_NUMBERS[month]
                row_month = common_values.copy()

                if row_total["Year"] is None:
                    row_month["Date"] = f"{mon}"
                elif mon in ["10", "11", "12"]:
                    row_month["Date"] = f"{int(row_total['Year'])-1}-{mon}"
                else:
                    row_month["Date"] = f"{row_total['Year']}-{mon}"
                
                row_month["Count"] = parsed["month_data"][idx]

                rows_months.append(row_month)
                if row_month["Count"] > 0:
                    if row_month["Date"] < min_date:
                        min_date = row_month["Date"]
                    if row_month["Date"] > max_date:
                        max_date = row_month["Date"]

    rows_months = [row for row in rows_months if min_date <= row["Date"] <= max_date]

    return rows_totals, rows_months


def write_parsed_rows(rows, dest):
    with open(dest, "w") as f:
        writer = csv.DictWriter(f, fieldnames=list(rows[-1].keys()))
        writer.writeheader()
        writer.writerows(rows)

def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--pdf",
        type=pathlib.Path,
        help="If not provided, will attempt to parse all PDFs in pdfs/ dir.",
    )
    parser.add_argument(
        "--max-pages", type=int, help="Only parse first X pages, just for debugging."
    )
    parser.add_argument(
        "--reparse",
        action="store_true",
        help="If parsing full directory, don't skip over already-parsed PDFs",
    )
    return parser.parse_args()


def parse_single_pdf(path, reparse=False, max_pages=None):
    year, month = re.search(r"(\d+)-(\d+)\.pdf$", path.name).groups()
    totals_dest = pathlib.Path(f"output/report-{year}-{month}-fiscal-year.csv")
    months_dest = pathlib.Path(f"output/report-{year}-{month}-month.csv")

    needs_parsing = not totals_dest.exists() or not months_dest.exists()
    if not needs_parsing and not reparse:
        return

    print(f"Parsing {path}")
    pdf = pdfplumber.open(path)
    rows_totals, rows_months = parse_pdf(pdf, year, month, max_pages)
    write_parsed_rows(rows_totals, totals_dest)
    write_parsed_rows(rows_months, months_dest)


def main():
    args = parse_args()
    common_kwargs = dict(reparse=args.reparse, max_pages=args.max_pages)
    if args.pdf:
        parse_single_pdf(args.pdf, **common_kwargs)
    else:
        paths = sorted(pathlib.Path("pdfs/").glob("*.pdf"), reverse=True)
        for path in paths:
            parse_single_pdf(path, **common_kwargs)


if __name__ == "__main__":
    main()
