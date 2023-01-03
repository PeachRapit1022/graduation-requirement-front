import React from "react";
// import axios from "axios";

type Props = {
    category: string,
    sum: number,
    result: number
}

const Step2ListItem = (props:Props) => {

    let result;
    if (props.result === 0) {
        result = (
            <td className="border-b border-slate-100 dark:border-slate-700 p-2 pl-8 text-green-500">
                Clear
            </td>
        )
    } else {
        result = (
            <td className="border-b border-slate-100 dark:border-slate-700 p-2 pl-8 text-red-600 dark:text-red-500">
                {props.result}
            </td>
        )
    }

    return (
        <tr>
            <td className="border-b border-slate-100 dark:border-slate-700 p-2 pl-8 text-slate-500 dark:text-slate-400">
                {props.category}
            </td>
            <td className="border-b border-slate-100 dark:border-slate-700 p-2 pl-8 text-slate-500 dark:text-slate-400">
                {props.sum}
            </td>
            {result}
        </tr>
    )
}

export default Step2ListItem;