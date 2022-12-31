import React, {useState} from 'react';
import axios, {AxiosError} from 'axios';
import Step1List from './step1List';
import { ListFormat } from 'typescript';

const Step1 = () => {

    const [file, setFile] = useState<File|null>(null);
    const [res, setRes] = useState<any>();
    const baseURL = 'http://localhost:8000'

    const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files[0]) {
            setFile(files[0])
        }
    }

    const onClickSubmit = async () => {
        if (!file) {
            return
        }

        const formData = new FormData()
        formData.append("file", file)

        await axios.post(`${baseURL}/files/`, formData)
            .then((res) => {
                //console.log(res.data[0]);
                setRes(res.data[1]);
                console.log(typeof(res))
            })
            .catch((e: AxiosError) => {
                console.log(e);
            })
    }

    let result: any;
    if (res) {
        result = (
            <Step1List res = {res}/>
        )
    }

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

export default Step1;
