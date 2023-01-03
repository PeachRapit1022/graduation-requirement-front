import React from 'react';
import axios from 'axios';

type Props = {
    title: string,
    code: string
}

const Step1ListItem = (props:Props) => {

    const baseURL = 'http://localhost:8000'

    // state初期化
    const [state, setState] = React.useState(
        {
            code: props.code,
            credit: '0',
            main: '0',
            sub: '0'
        }
    );
    // 情報登録後は行を消すのでstateに保存
    const [disabled, setDisabled] = React.useState(false);

    // 単位数書き換え
    const creditChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        const inputValue = event.target.value;
        setState((prevState) => ({ ...prevState, credit: inputValue }));
    };

    // メインクラス書き換え
    const mainClassChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        const inputValue = event.target.value;
        setState((prevState) => ({ ...prevState, main: inputValue }));
    };

    // サブクラス書き換え
    const subClassChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        const inputValue = event.target.value;
        setState((prevState) => ({ ...prevState, sub: inputValue }));
    };

    // 入力された単位情報を1つずつ送信
    const unknowSubjectSubmit = async () => {
        console.log(state)
        await axios.post(`${baseURL}/postcresitinfo/`, state)
        .then((res) => {
            console.log(res);
            setDisabled(true);
        })
    }

    // 情報登録後は非表示
    if (disabled){
        return null
    }

    return (
        <tr>
            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                {props.title}
            </td>
            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                {props.code}
            </td>
            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                <select 
                    name="credit"
                    onChange={(event) => {creditChange(event)}}
                    className="dark:bg-slate-800"
                    >
                    <option selected>---</option>
                    <option value={0.5}>0.5</option>
                    <option value={1}>1</option>
                    <option value={1.5}>1.5</option>
                    <option value={2}>2</option>
                    <option value={4}>4</option>
                </select>
            </td>
            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                <select 
                    name="class_main"
                    onChange={(event) => {mainClassChange(event)}}
                    className="dark:bg-slate-800"
                    >
                    <option selected>---</option>
                    <option value={1}>全学共通授業科目</option>
                    <option value={2}>高度教養科目</option>
                    <option value={3}>必修科目(専門)</option>
                    <option value={4}>選択必修科目(専門)</option>
                    <option value={5}>選択科目(専門)</option>
                </select>  
            </td>
            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                <select 
                    name="class_sub"
                    onChange={(event) => {subClassChange(event)}}
                    className="dark:bg-slate-800"
                    >
                    <option selected>---</option>
                    <option value={1}>共通専門基礎科目</option>
                    <option value={2}>専門基礎科目</option>
                    <option value={3}>市民工学共通科目</option>
                    <option value={4}>構造工学系科目</option>
                    <option value={5}>水工学系科目</option>
                    <option value={6}>地盤工学系科目</option>
                    <option value={7}>計画系科目</option>
                    <option value={8}>環境系科目</option>
                    <option value={9}>基礎教養科目</option>
                    <option value={10}>総合教養科目</option>
                    <option value={11}>外国語科目</option>
                    <option value={12}>情報科目</option>
                    <option value={13}>健康・スポーツ科学</option>
                    <option value={14}>高度教養科目</option>
                </select>
            </td>
            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                <button 
                    onClick={unknowSubjectSubmit}
                    className="w-full items-center justify-center rounded-md border border-transparent bg-red-600 dark:bg-red-800 px-4 text-base font-medium text-slate-50 dark:text-slate-300 shadow-sm hover:bg-red-400 dark:hover:bg-red-600"
                >
                    登録
                </button>
            </td>
        </tr>
    )
}

export default Step1ListItem;

/*
1,共通専門基礎科目
2,専門基礎科目
3,市民工学共通科目
4,構造工学系科目
5,水工学系科目
6,地盤工学系科目
7,計画系科目
8,環境系科目
9,基礎教養科目
10,総合教養科目
11,外国語科目
12,情報科目
13,健康・スポーツ科学
14,高度教養科目
*/