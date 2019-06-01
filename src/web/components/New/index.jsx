import React from "react";

const News = ({id,title,body}) => {
    return <li>
        <h3><span>{id}</span> : {title}</h3>
        <p>{body}</p>
    </li>
}
export default News;