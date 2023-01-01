import React from 'react';
//import axios, {AxiosResponse,AxiosError} from 'axios';
import Step1ListItem from './step1ListItem';

type Item = {
    科目: string,
    時間割コード: string
}

const Step1List = (props:any) => {
    return (
        <div>
            {props.res.map((item: Item) => {
                return (
                    <>
                        <Step1ListItem 
                        title = {item.科目}
                        code = {item.時間割コード}
                        />
                    </>
                )
            })}
        </div>
    )
}

export default Step1List;
