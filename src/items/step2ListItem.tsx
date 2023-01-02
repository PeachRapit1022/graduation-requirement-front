import React from "react";
// import axios from "axios";

type Props = {
    category: string,
    sum: number,
    result: number
}

const Step2ListItem = (props:Props) => {
    return (
        <div>
            <span>{props.category}</span>
            <span>{props.sum}</span>
            <span>{props.result}</span>
        </div>
    )
}

export default Step2ListItem;