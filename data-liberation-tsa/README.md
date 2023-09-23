# tsa-prototyping overview

Since 2019, the TSA has posted data on traveler complaints to a [FOIA electronic reading room](https://www.tsa.gov/foia/readingroom?page=0). 
They post this data in [PDF form](https://www.tsa.gov/sites/default/files/foia-readingroom/tsa-contact-center-traveler-complaints-report-may-2023.xlsm_.pdf), and in irregular intervals. Because of the way in which
the idiosyncratic fashion in which the data is laid out in the PDFs, some additional legwork is needed to get the data in a format that can be easily worked with. The Data Liberation Project has used Jeremy Singer-Vine's [pdfplumber](https://github.com/jsvine/pdfplumber) library to parse the PDFs and has also converted the data into CSV files. 

## Scripts

There are three Python scripts that have been used towards these goals. [scraper.py](https://github.com/jsvine/tsa-prototyping/blob/main/scripts/scraper.py) scrapes the TSA FOIA electronic reading room for all of the PDFs that we care about and downloads them. [parser.py](https://github.com/jsvine/tsa-prototyping/blob/main/scripts/parser.py) parses each of the PDFs to get the traveler complaint data that we care about. For each PDF, it puts that data into two CSV files: one that tells us about the complaints that occurred for each month, and one that focuses only on the fiscal years. [master.py](https://github.com/jsvine/tsa-prototyping/blob/main/scripts/master.py) iterates over the month CSV files that parser.py created, starting with the newest reports, and gradually creates one larger CSV file that contains all of the complaint data we have access to, stretching back to January of 2015 and including information for each month from that time to May of 2023. master.py also checks for any discrepancies between one file's data for a given month and the previous file's data for that month, and currently finds no such errors. 

## Output

All of the different types of output were covered above. The categories used for entries in the month CSV files are PDF Report Year, Airport, Category, Subcategory, Count, and Date. The date data is stored in the form "YYYY-MM", and many of these categories don't need to be represented for any given row; for instance, if both the category and subcategory are represented as an empty string, then the Count represents the airport's total number of complaints for that month, regardless of category. If only the subcategory is represented as an empty string, then the Count represents the airport's total complaints for that category in that month. If the airport itself is represented as an emptry string, then we believe that the complaint either wasn't specific to one airport or didn't disclose what airport the incident occurred at, although confirmation for this should be sought before publication of this data. 

## Next Steps

We should figure out some quality checks to perform on the data. There are no discrepancies that show up when you run master.py, and the month data always sums to the year data, but there are more robust checks that can be run to confirm that everything is at it seems. 

There are some issues with data standardization. Because of the way that the PDFs are laid out, sometimes subcategory names are cut off and we have no way of knowing what the completed subcategory name would be. For example, you can have multiple consecutive rows in the PDF where the subcategory is "Expedited Passenger Screening Program", and while we know that it's been cut off we have no way of knowing what the full subcategory names would be. We should figure out some way to at least flag this in the data.

We should also begin to work on documentation. A (much later) version of this README.md can serve as our technical documentation to explain our code and other information contained on GitHub, and we can create a Google Doc for a more general form of documentation that would be more accessible to the public. 

When the earlier steps are completed, we could begin to conduct some data analysis and then outreach to news outlets that would be interested in this data. 
