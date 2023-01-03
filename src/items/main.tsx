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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 dark:bg-slate-800">
            <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                <div>
                    <div className="text-4xl font-mono h-full text-slate-500 dark:text-slate-400">
                        Check your credits
                    </div>
                    <div className="text-xl font-mono h-full text-slate-500 dark:text-slate-400">
                        神戸大学工学部市民工学科 - 2020年入学者
                    </div>
                </div>
                <div>
                    <div>
                        成績表登録
                    </div>
                    <input name="file" type="file" accept="" onChange={onChangeFile}/>
                    <input type="button" disabled={!File} value="送信" onClick={onClickSubmit}/>
                </div>
            </div>
            {result}
        </div>
    );
}

export default Main;
