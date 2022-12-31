import React, {useState} from 'react';
import axios, {AxiosError} from 'axios';

const Step1ListItem = (props:any) => {

    return (
        <div>
            <form>
            <span>{props.title}</span>
            <span>{props.code}</span>
                <select name="class_main">
                    <option value={0}>---</option>
                    <option value={1}>全学共通授業科目</option>
                    <option value={2}>高度教養科目</option>
                    <option value={3}>必修科目(専門)</option>
                    <option value={4}>選択必修科目(専門)</option>
                    <option value={5}>選択科目(専門)</option>
                </select>  
                <select name="class_sub">
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
                <input type={'button'} value='登録'/>
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