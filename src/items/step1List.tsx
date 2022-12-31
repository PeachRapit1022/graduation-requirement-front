import React from 'react';
// import axios from 'axios';
import Step1ListItem from './step1ListItem';

const Step1List = (props:any) => {
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
