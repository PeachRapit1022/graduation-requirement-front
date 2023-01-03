import React from "react";
import Step2ListHead from "./step2ListHead";
import Step2ListItem from "./step2ListItem";
import Step2TableTitle from "./step2TableTitle";

type Item = {
    category: string,
    sum: number,
    result: number
}

type Items = {
    rule: string,
    result: Item[]
}

const Step2Table = (props:Items) => {

    return (
        <div className='my-12'>
            <Step2TableTitle
            rule = {props.rule}
            result = {props.result}
            />
            <div className="shadow-sm overflow-hidden my-2">
                <table className="border-collapse table-auto w-full text-sm">
                    <Step2ListHead/>
                    <tbody className="bg-white dark:bg-slate-800">
                        {props.result.map((item: Item) => {
                            
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
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Step2Table;