# 
# Approximate time taken
### Designing product specifications - 30 min
### Converting product specifications to techincal requirements - 15 min
### Backend blog page design & development - 90 min
### Frontend blog page design & development - 60 min
### Backend search design & development - 15 min
### Frontend search page design & development - 20 min
### Extracting data from http://matrisomedb.pepchem.org/ and storing in local database & implementing utilities related to this - 60 min
### Overall testing - 30 min
### Debugging & Issue fixes - 60 min
## Total Development time - 380 min
#
### Infra deployment on Azure & registration of domain - 60 min
### Documentation time - 30 min
## Total time including infra setup - 470 min
#

#
# Website - https://www.jrj.app/

# Design
## Choice of technology
- I have chosen Python to build the backend & React, Javascript, HTML, CSS to build the frontend
- I have chosen to use a local database provided by tinydb(https://tinydb.readthedocs.io/en/latest/), since this is a developmental project, and to save the hassle of deploying a db like MongoDB.
- Deployed frontent React app on (https://www.netlify.com/)
- Deployed backend on Azure

## Designing a Generic Blog for 'About', 'Publications', 'Tutorial', 'Tools', 'Submit your Data' pages
1. In http://matrisomedb.pepchem.org/ the sections, 'About', 'Publications', 'Tutorial', 'Tools', 'Submit your Data' looks like they are are built individually. But, they share a lot of common features, i.e., they all have some text, image, hyperlinks, emails.
2. Keeping the above point in perspective, I have visualised each of these pages as a blog. And, I have designed a generic blog which can handle any content with text, image, hyperlinks, emails along with any nested content(to any level of recursion). Backend code is in ```blog_api.py & blog_repo.py```. Frontend code is in ```components/Blog.js```.
3. This helped me avoid writing individual code for each page.
4. This also helps by allowing us to dynamically configure the content on each of these pages without any Frontend code change. Meaning, we can control what is shown in these pages from just backend, with just a configuration change.
    ```
    Sample blog structure in db
    {
        "blog_name": "Submit",
        "header": {
            "type": "text",
            "break_line": true,
            "content": "Submit to MatrisomeDB",
            "color": "#0295cf",
            "fontWeight": "bold",
            "fontSize": "2em"
        },
        "type": "list",
        "content": [
            {
                "type": "text",
                "break_line": true,
                "content": "MatrisomeDB is expandable! "
            },
            {
                "type": "email",
                "break_line": true,
                "content": "matrisomeproject@gmail.com",
                "color": "#0295cf",
                "fontWeight": "bold"
            }
        ]
    }
    ```
5. The data model for blog data is showcased in files ```data/about.json, data/publications.json, data/search.json, data/submit_your_data.json, data/tools.json, data/tutorial.json```

## Designing the Search page
1. In order to populate the data in this page, I had downloaded the csv file available in http://matrisomedb.pepchem.org/.
2. The data stored is in the format as described below
    ```
    {
        "Confidence_Score": 36.1361,
        "Coverage_Map_File": "Fibrotic lung ECM (Quantitative detergent solubility profiling)_Q8C088.html",
        "Description": "EGF-like and EMI domain-containing protein 1",
        "Gene": "Egfem1",
        "Reference": "10.15252/msb.20156123",
        "Repository": "PXD001765",
        "Sample_type": "Fibrotic lung ECM (Quantitative detergent solubility profiling)",
        "Species": "mouse",
        "Tissue": "Lung Fibrosis",
        "Total_Ion_Intensity": "47400100",
        "UniProt": "Q8C088",
        "collection": "matrisome_data",
        "id": 8
    }
    ```
3. Search box takes a search term and searches on the Description and Sample_type fields, by using partial string matching

## Additonal Utility APIs
### Designed CRUD APIs to create a new blog, delete one or all blogs & to initialise some test data & store in local database
    ```
    APIs:
    /blog/fetch-all?blog-type=<blog-type> - Fetch all blog data of a page (for Ex: data on Tutorials page)
    /blog/add?blog-type=<blog-type> - Create & save a new blog
    /blog/delete?id=<id> = Delete a blog
    /blog/delete-all - Delete all blogs
    /blog/initialise - Cleans the database & initialises with test data
    /blog/search - Search feature
