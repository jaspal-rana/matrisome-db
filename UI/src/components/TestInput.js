

export const BlogData = {
    "blog_name": "Tutorial",
    "header": {
        "type": "text",
        "break_line": true,
        "content": "MatrisomeDB Tutorial",
        "color": "#0295cf",
        "fontWeight": "bold",
        "fontSize": "1.5em"
    },
    "type": "list",
    "content": [
        {
            "type": "list",
            "break_line": true,
            "content": [
                {
                    "type": "text",
                    "break_line": true,
                    "content": "1. General query of MatrisomeDB: ",
                    "color": "#0295cf",
                    "fontWeight": "bold",
                    "fontSize": "1.3em"
                },
                {
                    "type": "list",
                    "break_line": true,
                    "content": [
                        {
                            "type": "text",
                            "break_line": true,
                            "content": "Locate the Search box"
                        },
                        {
                            "type": "image",
                            "break_line": true,
                            "content": "http://matrisomedb.pepchem.org/static/tutorial/search_bar.png"
                        },
                        {
                            "type": "text",
                            "break_line": true,
                            "content": "General query of MatrisomeDB is performed by inputting either one or multiple gene symbols, a proteins description, or a tissue type in the Search box. General queries are case-insensitive and accept partial word matching."
                        },
                        {
                            "type": "text",
                            "break_line": true,
                            "content": "Search by typing a single gene name, tissue, or description in the Search box. For example, 'COL1A1' or 'Breast'"
                        },
                        {
                            "type": "text",
                            "break_line": true,
                            "content": "Note: Partial gene names are also accepted, for example entering 'COL1' will return data on all the protein entries encoded by a gene whose symbol contains COL1, such as COL1A1 but also COL10A1, etc."
                        },
                        {
                            "type": "text",
                            "break_line": true,
                            "content": "Search by typing multiple genes in the Search box. This can be done by inputting comma-separated gene symbols, for example, 'COL1A1,COL6A3,COL6A1' or use syntax 'genes=(COL1A1,COL6A3,COL6A1)'."
                        }
                    ]
                }
            ]
        },
        {
            "type": "list",
            "break_line": true,
            "content": [
                {
                    "type": "text",
                    "break_line": true,
                    "content": "2. Searching MatrisomeDB using Option boxes:",
                    "color": "#0295cf",
                    "fontWeight": "bold",
                    "fontSize": "1.3em"
                },
                {
                    "type": "list",
                    "break_line": true,
                    "content": [
                        {
                            "type": "text",
                            "break_line": true,
                            "content": "The three Option boxes below the Search box can be further used to explicitly select specific Matrisome Categories, Species, and /or Tissues. "
                        },
                        {
                            "type": "image",
                            "break_line": true,
                            "content": "http://matrisomedb.pepchem.org/static/tutorial/option_box.png"
                        },
                        {
                            "type": "text",
                            "break_line": true,
                            "content": "Users can cancel their selection by holding Ctrl and left-click on the options to be deleted."
                        }
                    ]
                }
            ]
        }
    ]
}