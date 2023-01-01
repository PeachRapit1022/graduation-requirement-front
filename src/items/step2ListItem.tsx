import React from "react";
// import axios from "axios";

type Props = {
    name1: string,
    name2: string,
    sum: number
}

const Step2ListItem = (props:Props) => {
    return (
        <div>
            <span>{props.name1}</span>
            <span>{props.name2}</span>
            <span>{props.sum}</span>
        </div>
    )
}

export default Step2ListItem;