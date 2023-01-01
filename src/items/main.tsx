import React, { ReactElement } from 'react';
import axios, {AxiosResponse,AxiosError} from 'axios';
import Step1List from './step1List';
import Step2List from './step2List';

const Main = () => {

    const baseURL = 'http://localhost:8000';

    // CSVファイル保管
    const [file, setFile] = React.useState<File|null>(null);

    // レスポンス時の表示モードと内容保管
    const [mode, setMode] = React.useState<number>(0);
    const [info, setInfo] = React.useState<AxiosResponse|null>(null);

    // CSVファイル取得
    const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files[0]) {
            setFile(files[0]);
        }
    }

    // 送信ボタン・再送信ボタン動作
    const onClickSubmit = async () => {
        if (!file) {
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        // post実行
        await axios.post(`${baseURL}/files/`, formData)
            .then((res) => {

                // レスポンスをstateに保存
                setMode(res.data[0]);
                setInfo(res.data[1]);
                console.log(res.data[1]);
                                
            })
            .catch((e: AxiosError) => {
                console.log(e);
            });
    }

    // 単位情報表示変数
    let result: ReactElement;
    if (mode === 1) {
        result = (
            <>
                <Step1List res = {info}/>
                <input type="button" disabled={!File} value="再送信" onClick={onClickSubmit}/>
            </>
        );
    } else if (mode === 2) {
        result = (
            <>
                <Step2List res = {info}/>
            </>
        );
    } else {
        result = <></>;
    }

    // 表示
    return (
        <div>
        <body>
            <h1>進級要件確認ページ</h1>
            <p>成績表を登録する
            <input name="file" type="file" accept="" onChange={onChangeFile}/>
            <input type="button" disabled={!File} value="送信" onClick={onClickSubmit}/>
            </p>
            {result}
        </body>
        </div>
    );
}

export default Main;
