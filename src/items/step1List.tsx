import React from 'react';
import Step1ListHead from './step1ListHead';
//import axios, {AxiosResponse,AxiosError} from 'axios';
import Step1ListItem from './step1ListItem';

type Item = {
    科目: string,
    時間割コード: string
}

const Step1List = (props:any) => {
    return (
        <div className="relative rounded-xl overflow-auto">
            <div className="shadow-sm overflow-hidden my-8">
                <table className="border-collapse table-auto w-full text-sm">
                    <Step1ListHead/>
                    <tbody className="bg-white dark:bg-slate-800">
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
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Step1List;
