import React from 'react';
// import axios from 'axios';
import Step2ListItem from './step2ListItem';

type Item = {
    name1: string,
    name2: string,
    sum: number
}

const Step2List = (props:any) => {
    return (
        <div>
            {props.res.map((item: any) => {
                return (<>{
                item.map((part:any) => {
                    return (
                        <>
                            <Step2ListItem 
                            name1 = {part.カテゴリ名}
                            name2 = {part.取得単位}
                            sum = {part.result}
                            />
                        </>
                    )
                    
                })}</>)
            })}
        </div>
    )
}

export default Step2List;
