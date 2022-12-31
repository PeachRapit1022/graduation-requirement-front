import React from 'react';
import axios from 'axios';
import Step2ListItem from './step2ListItem';

const Step2List = (props:any) => {
    return (
        <div>
            {props.res.map((item: any) => {
                return (
                    <>
                        <Step2ListItem 
                        name1 = {item.name1}
                        name2 = {item.name2}
                        sum = {item.sum}
                        />
                    </>
                )
            })}
        </div>
    )
}

export default Step2List;
