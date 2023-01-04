import React from "react";

type Item = {
    category: string,
    sum: number,
    result: number
}

type Items = {
    rule: string,
    result: Item[]
}

const Step2TableTitle = (props:Items) => {

    let bg = 'bg-green-200 dark:bg-green-900';

    // eslint-disable-next-line
    props.result.map((item: Item) => {            
        if (item.result !== 0) {
            bg = 'bg-red-200 dark:bg-red-900';
        }
    })
    
    return (
        <div className={bg}>
            <div className="p-1 text-slate-500 dark:text-slate-400">
                {props.rule}
            </div>
        </div>
    )
}

export default Step2TableTitle;