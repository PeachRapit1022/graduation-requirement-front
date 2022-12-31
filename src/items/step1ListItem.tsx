import React from 'react';
import axios from 'axios';

const Step1ListItem = (props:any) => {

    const baseURL = 'http://localhost:8000'

    // state初期化
    const [state, setState] = React.useState(
        {
            code: props.code,
            credit: 0,
            main: 0,
            sub: 0
        }
    );
    // 情報登録後は行を消すのでstateに保存
    const [disabled, setDisabled] = React.useState(false);

    // 単位数書き換え
    const creditChange = (event:any) => {
        const inputValue = event.target.value;
        setState((prevState) => ({ ...prevState, credit: inputValue }));
    };

    // メインクラス書き換え
    const mainClassChange = (event:any) => {
        const inputValue = event.target.value;
        setState((prevState) => ({ ...prevState, main: inputValue }));
    };

    // サブクラス書き換え
    const subClassChange = (event:any) => {
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
        <div>
            <form>
            <span>{props.title}</span>
            <span>{props.code}</span>
                <select 
                    name="credit"
                    onChange={(event) => {creditChange(event)}}
                    >
                    <option value={0}>---</option>
                    <option value={0.5}>0.5</option>
                    <option value={1}>1</option>
                    <option value={1.5}>1.5</option>
                    <option value={2}>2</option>
                    <option value={4}>4</option>
                </select>
                <select 
                    name="class_main"
                    onChange={(event) => {mainClassChange(event)}}
                    >
                    <option value={0}>---</option>
                    <option value={1}>全学共通授業科目</option>
                    <option value={2}>高度教養科目</option>
                    <option value={3}>必修科目(専門)</option>
                    <option value={4}>選択必修科目(専門)</option>
                    <option value={5}>選択科目(専門)</option>
                </select>  
                <select 
                    name="class_sub"
                    onChange={(event) => {subClassChange(event)}}
                    >
                    <option value={0}>---</option>
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
                    <option value={11}>高度教養科目</option>
                    <option value={12}>情報科目</option>
                    <option value={13}>健康・スポーツ科学</option>
                    <option value={14}>高度教養科目</option>
                </select>
                <input type={'button'} value='登録' onClick={unknowSubjectSubmit}/>
            </form>
        </div>
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