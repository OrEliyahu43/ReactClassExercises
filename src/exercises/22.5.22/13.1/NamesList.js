import React from "react"

const NamesList = (props) => {


    const names1 = props.names.map((name,index) => {
        return <div key={index}>{name}</div>

    })


    return (
        <div>
            {names1}
        </div>
    )
}

export default NamesList