import React from 'react';
// import axios from 'axios';
import Step2ListItem from './step2ListItem';

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
    console.log(props)
    return (
        <div>
            {props.res.map((items: Items) => {
                return (
                    <p>
                    <div>{items.rule}</div>
                        {items.result.map((item: Item) => {
                            return (
                                <>
                                    <Step2ListItem 
                                    category = {item.category}
                                    sum = {item.sum}
                                    result = {item.result}
                                    />
                                </>
                            )
                        })}
                    </p>
                )
            })}
        </div>
    )
}

export default Step2List;
