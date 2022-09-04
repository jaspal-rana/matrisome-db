import React from 'react'
import { useState, useEffect } from 'react'

const Blog = ({ section }) => {
    const [blogData, setBlogData] = useState(null)

    const fetchBlogData = async (section) => {
        try {
            const blogFetchAPI = "http://localhost:5000/blog/fetch-all?blog-type="

            let rsp = await fetch(blogFetchAPI + section)
            rsp = await rsp.json()
            if (rsp) {
                setBlogData(rsp[0])
            } else {
                console.log("Error in fetching API response")
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchBlogData(section)
    }, [section])

    const buildReccBlog = (jsonObj) => {
        let elem = null
        switch (jsonObj.type) {
            case "text":
                elem = <div style={{ marginLeft: '10px', textAlign: 'left' }}>
                    <p style={{ color: jsonObj.color, fontWeight: jsonObj.fontWeight, fontSize: jsonObj.fontSize }}>{jsonObj.content}</p>
                </div>
                break;
            case "image":
                elem = <div style={{ marginLeft: '10px' }}>
                    <img style={{ margin: '10px', maxWidth: "90%" }} src={jsonObj.content} alt="404"></img>
                </div>
                break;
            case "list":
                elem = <div style={{ marginLeft: '10px' }}>
                    {
                        jsonObj.content.map((listItem, index) => (<div key={index} >{buildReccBlog(listItem)}</div>))
                    }
                </div>
                break;
            case "link":
                elem = <div style={{ marginLeft: '10px' }}>
                    <a href={jsonObj.content} target='_blank' rel="noreferrer"
                        style={{ color: jsonObj.color, fontWeight: jsonObj.fontWeight, fontSize: jsonObj.fontSize }}>
                        {jsonObj.contentAlt ? jsonObj.contentAlt : jsonObj.content}
                    </a>
                </div>
                break;
            case "email":
                elem = <div style={{ marginLeft: '10px' }}>
                    <a href={"mailto: " + jsonObj.content} style={{ color: jsonObj.color, fontWeight: jsonObj.fontWeight, fontSize: jsonObj.fontSize }}>
                        {jsonObj.contentAlt ? jsonObj.contentAlt : jsonObj.content}
                    </a>
                </div>
                break;
            default:

        }

        return elem;
    }

    return (
        <div style={{ marginLeft: "20%", marginRight: "20%" }}>
            {
                blogData && blogData.header ?
                    <div style={{ color: blogData.header.color, fontWeight: blogData.header.fontWeight, fontSize: blogData.header.fontSize }}>
                        {blogData.header.content}
                    </div>
                    :
                    null
            }
            {
                blogData ? buildReccBlog(blogData) : <h2>Coming soon...</h2>
            }
        </div>
    )
}

export default Blog