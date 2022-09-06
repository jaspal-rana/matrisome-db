import React from 'react'
import Blog from './Blog'
import { useState } from 'react'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const onInputChange = (e) => {
        e.preventDefault()
        setSearchTerm(e.target.value)
    }

    const onSubmitHandle = (e) => {
        e.preventDefault()
        fetchSearchResults()

    }

    const fetchSearchResults = async () => {
        try {
            const searchAPI = "https://mdb-api.jrj.app/blog/search"
            const requestData = {
                "partial_match": {
                    "fields": ["Description", "Tissue"],
                    "search_term": searchTerm
                }
            }

            let rsp = await fetch(searchAPI, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            })

            rsp = await rsp.json()
            if (rsp) {
                setSearchResults(rsp)
                console.log(rsp)
            } else {
                console.log("Error in fetching API response")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div style={{ marginLeft: "1em", marginRight: "1em" }}>
            <Blog section={'search'} />
            <input type="text" style={{
                width: '60%',
                marginTop: "1em",
                paddingTop: "0.5em",
                paddingBottom: "0.5em",
                paddingLeft: "1em",
                paddingRight: "1em"
            }}
                value={searchTerm} onChange={onInputChange} />
            <br />
            <button style={{
                border: "1px solid #0295cf", borderRadius: "0.3em",
                minWidth: "120px",
                paddingTop: "0.5em", paddingBottom: "0.5em",
                marginTop: "1em"
            }} onClick={onSubmitHandle} >
                Search
            </button>
            {
                searchResults && searchResults.length > 0 ?
                    <table style={{ marginLeft: '30px', marginRight: '30px', marginTop: '1em' }}>
                        <tr>
                            <th>Gene</th>
                            <th>UniProt</th>
                            <th>Description</th>
                            <th>Sample Type</th>
                            <th>Tissue</th>
                            <th>Species</th>
                            <th>Reference</th>
                        </tr>
                        {
                            searchResults.map((row) => {
                                return <tr>
                                    <td>{row['Gene']}</td>
                                    <td>{row['UniProt'] ? row['UniProt'] : row['Uniprot']}</td>
                                    <td>{row['Description']}</td>
                                    <td>{row['Sample_type']}</td>
                                    <td>{row['Tissue']}</td>
                                    <td>{row['Species']}</td>
                                    <td>{'https://doi.org/' + row['Reference']}</td>
                                </tr>
                            })
                        }

                    </table>
                    :
                    null
            }

        </div>
    )
}

export default Search