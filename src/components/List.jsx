
import { React, useState } from 'react'
import posts from "../utils/posts.js"

function List(props) {
    const filteredData = posts.filter((el) => {
        if (props.input === '') {
            return el;
        } else {
            return el.professor.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((item) => (
                <div key={item.id}>{item.professor} at {item.college}</div>
            ))}
        </ul>
    )
}

export default List