import React, {useState} from 'react';
import axios, {AxiosError} from 'axios';
import { ListFormat } from 'typescript';
import Step1ListItem from './step1ListItem';

const Step1List = (props:any) => {
    console.log(props)
    return (
        <div>
            {props.res.map((item: any) => {
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
//{props.res.時間割コード}
