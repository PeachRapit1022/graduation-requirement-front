import React, { ReactElement } from 'react';
import axios, {AxiosResponse,AxiosError} from 'axios';
import Step1List from './step1List';
import Step2List from './step2List';

const Main = () => {

    //const baseURL = 'http://localhost:8000';
    const baseURL = 'https://p3vwqw.deta.dev';

    // CSVファイル保管
    const [file, setFile] = React.useState<File|null>(null);
    const [fileName, setFileName] = React.useState<string>('');

    // レスポンス時の表示モードと内容保管
    const [mode, setMode] = React.useState<number>(0);
    const [info, setInfo] = React.useState<AxiosResponse|null>(null);
    const [name, setName] = React.useState<string>('');

    // バナークリックで削除
    const resetInfo = () => {
        setFile(null);
        setMode(0);
        setInfo(null);
        setName('');
    }

    // CSVファイル取得
    const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMode(4);
        setInfo(null);
        setName('');
        const files = e.target.files;
        if (files && files[0]) {
            setFile(files[0]);
            setFileName(files[0]['name'])
        }    
    }

    // 送信ボタン・再送信ボタン動作
    const onClickSubmit = () => {
    
        if (!file) {
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        setMode(3);

        // post実行
        axios.post(`${baseURL}/files/`, formData)
            .then((res) => {

                // レスポンスをstateに保存
                setMode(res.data[0]);
                setInfo(res.data[1]);
                setName(res.data[2] + 'さん');
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
                <button
                    className="w-full items-center justify-center rounded-md border border-transparent bg-red-600 dark:bg-red-800 px-4 py-1 mb-12 text-base font-medium text-slate-50 dark:text-slate-300 shadow-sm hover:bg-red-400 dark:hover:bg-red-600"
                    disabled={!File}
                    onClick={onClickSubmit}
                >
                    再送信
                </button>
            </>
        );
    } else if (mode === 2) {
        result = (
            <>
                <Step2List res = {info}/>
            </>
        );
    } else if (mode === 3) {
        result = (
            <div className="mx-auto spinner">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        );
    } else if (mode === 4){
        result = (
            <>
                <div className="text-l my-2 text-center font-mono h-full text-slate-500 dark:text-slate-400">
                    {fileName}
                </div>
                <label className="px-4 py-2 mx-auto max-w-xs flex justify-center font-mono rounded-md bg-slate-600 dark:bg-red-800 text-slate-50 dark:text-slate-300 hover:bg-slate-500 dark:hover:bg-red-600">
                    <input type="button" disabled={!File} value="アップロード" 
                    onClick={onClickSubmit}
                    />
                </label>
            </>
        );
    } else {
        result = <></>;
    }

    // 表示
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 dark:bg-slate-800">
            <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                <div onClick={resetInfo}>
                    <div className="text-4xl font-mono h-full text-slate-500 dark:text-slate-400">
                        Check your credits
                    </div>
                    <div className="text-xl font-mono h-full text-slate-500 dark:text-slate-400">
                        神戸大学工学部市民工学科 - 2020年入学者
                    </div>
                </div>
                <div className="items-center justify-end md:flex md:flex-1 lg:w-0 h-full font-mono text-slate-500 dark:text-slate-400">
                    {name}
                </div>
                <div className="items-center justify-end md:flex md:flex-1 lg:w-0">                 
                    <a className="px-4 py-2 mx-2 rounded-md font-mono bg-slate-600 dark:bg-red-800 text-slate-50 dark:text-slate-300 hover:bg-slate-500 dark:hover:bg-red-600"
                    href='https://github.com/PeachRapit1022/graduation-requirement-front'
                    >
                        Github
                    </a>
                    <label className="px-4 py-2 mx-2 rounded-md font-mono bg-slate-600 dark:bg-red-800 text-slate-50 dark:text-slate-300 hover:bg-slate-500 dark:hover:bg-red-600">
                        成績表選択
                        <input className="hidden" type="file" accept=".csv"
                        onChange={onChangeFile}
                        />
                    </label>
                </div>
            </div>
            {result}
        </div>
    );
}

export default Main;
