import React from "react";

const Step2ListHead = () => {
    return (
        <thead>
            <tr>
                <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                    カテゴリ名
                </th>
                <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                    取得単位数
                </th>
                <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                    残数
                </th>
            </tr>
        </thead>   
    )
}

export default Step2ListHead;