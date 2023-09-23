import pathlib
from urllib.parse import urljoin

import requests
from bs4 import BeautifulSoup

KEYWORD = "Contact Center"
PDF_SAVE_PREFIX = "pdfs/tsa-contact-center-traveler-complaints-report"
BASE_URL = "https://www.tsa.gov/foia/readingroom"

TITLE_FIXES = {
    "https://www.tsa.gov/sites/default/files/foia-readingroom/tsa_contact_center_traveler_complaints_report_septermber.pdf": "September 2019"  # noqa: E501
}

MONTHS_TO_NUMBERS = {
    "January": "01",
    "February": "02",
    "March": "03",
    "April": "04",
    "May": "05",
    "June": "06",
    "July": "07",
    "August": "08",
    "September": "09",
    "October": "10",
    "November": "11",
    "December": "12",
}


def process_link(link):
    href = link["href"]

    if KEYWORD not in link.text or not href.endswith(".pdf"):
        return

    pdf_url = urljoin(BASE_URL, href)
    if pdf_url == "https://www.tsa.gov/sites/default/files/foia-readingroom/tsa-contact-center-traveler-complaints-report-june-2021.pdf":
        print(f"Skipping {pdf_url}")
        return

    title = TITLE_FIXES.get(pdf_url, link.text)
    elements = title.split()
    year = elements[-1]
    month = MONTHS_TO_NUMBERS[elements[-2]]
    dest = pathlib.Path(f"{PDF_SAVE_PREFIX}-{year}-{month}.pdf")

    if dest.exists():
        return

    print(f"Downloading {pdf_url}")
    pdf_response = requests.get(pdf_url)

    with open(dest, "wb") as pdf_file:
        pdf_file.write(pdf_response.content)


def check_and_download(page):
    response = requests.get(BASE_URL, params=dict(page=page))
    soup = BeautifulSoup(response.content, "html.parser")
    for link in soup.find_all("a", href=True):
        process_link(link)


def main():
    for i in range(25):
        print(f"Checking page {i}")
        check_and_download(i)


if __name__ == "__main__":
    main()
