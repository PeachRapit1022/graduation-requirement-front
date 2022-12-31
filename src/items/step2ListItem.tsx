import React from "react";
// import axios from "axios";

const Step2ListItem = (props:any) => {
    return (
        <div>
            <span>{props.name1}</span>
            <span>{props.name2}</span>
            <span>{props.sum}</span>
        </div>
    )
}

export default Step2ListItem;