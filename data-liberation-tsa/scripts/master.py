import pandas as pd
import pathlib

def master_csv(report_paths):
    """
    Create master csv file
    """
    deduped_list = []
    earliest_date = "9999"
    for path in report_paths:
        print(path.name)
        df = pd.read_csv(path)
        print(df["Date"].max(), df["Date"].min())
        new_data = (
            df
            .loc[lambda df: df["Date"] < earliest_date]
        )

        if deduped_list: #if we've already processed one PDF, check disagreements
            old_data_df = (
            df
            .loc[lambda df: df["Date"] <= earliest_date]
            )
            last_df = deduped_list[-1]
            check_disagreements(last_df, old_data_df)

        deduped_list.append(new_data)
        if len(new_data):
            earliest_date = new_data["Date"].min()

    deduped = pd.concat(deduped_list)

    output_csv_path = "output/master-month.csv"

    # write deduped master df to csv
    deduped.to_csv(output_csv_path, index=False)

    print(f"Data saved to {output_csv_path}")

def check_disagreements(last_df, old_data_df):
    """
    Checks to see if the data in this dataframe that we've already processed
    matches the counts from previous PDF
    """
    # define the key columns excluding "PDF Report Date"
    key_columns = ["Airport", "Category", "Subcategory", "Date"]

    # ensure consistent data types by explicitly converting key columns to str
    for column in key_columns:
        old_data_df.loc[:, column] = old_data_df[column].astype(str)
        last_df.loc[:, column] = last_df[column].astype(str)

    # group old_data_df and last_df by the key columns and sum the counts
    old_data_df_grouped = old_data_df.groupby(key_columns)["Count"].sum().reset_index()
    last_df_grouped = last_df.groupby(key_columns)["Count"].sum().reset_index()

    # merge the two grouped dataframes on the key columns
    merged_data = pd.merge(old_data_df_grouped, last_df_grouped, on=key_columns, suffixes=("_old", "_last"))

    # check for discrepancies where the counts differ
    discrepancies = merged_data[merged_data["Count_old"] != merged_data["Count_last"]]

    if discrepancies.empty:
        return
    else:
        print()
        print("Discrepancies found:")
        print(discrepancies)

def main():
    report_paths = list(reversed(sorted(pathlib.Path("output/").glob("report-20*-month.csv"))))
    master_csv(report_paths)


if __name__ == "__main__":
    main()
