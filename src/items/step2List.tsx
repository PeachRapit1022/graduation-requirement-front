import React from 'react';
// import axios from 'axios';
import Step2Table from './step2Table';

type Item = {
    category: string,
    sum: number,
    result: number
}

type Items = {
    rule: string,
    result: Item[]
}

const Step2List = (props: any) => {

    return (
        <div>
            {props.res.map((items: Items) => {
                return (
                    <Step2Table 
                    rule = {items.rule}
                    result = {items.result}
                />
                )
            })}
        </div>
    )
}

export default Step2List;
