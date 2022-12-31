import React from 'react';
import axios, {AxiosError} from 'axios';
import Step1List from './step1List';
import Step2List from './step2List';

const Step1 = () => {

    const baseURL = 'http://localhost:8000'

    const [file, setFile] = React.useState<File|null>(null);
    const [res1, setRes1] = React.useState<any>();
    const [res2, setRes2] = React.useState<any>();

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

        setRes1(null);
        setRes2(null);

        const formData = new FormData()
        formData.append("file", file)

        await axios.post(`${baseURL}/files/`, formData)
            .then((res) => {

                if (res.data[0]) {
                    setRes1(res.data[2]);
                    console.log(res.data[2]);
                } else {
                    setRes2(res.data[1]);
                    console.log(res.data[1])
                }
                                
            })
            .catch((e: AxiosError) => {
                console.log(e);
            })
    }

    let result1: any;
    if (res1) {
        result1 = (
            <>
                <Step1List res = {res1}/>
                <input type="button" disabled={!File} value="再送信" onClick={onClickSubmit}/>
            </>
        )
    }
    let result2: any;
    if (res2) {
        result2 = (
            <>
                <Step2List res = {res2}/>
            </>        )
    }

    return (
        <div>
        <body>
            <h1>進級要件確認ページ</h1>
            <p>成績表を登録する
            <input name="file" type="file" accept="" onChange={onChangeFile}/>
            <input type="button" disabled={!File} value="送信" onClick={onClickSubmit}/>
            </p>
            {result1}
            {result2}
        </body>
        </div>
    );
}

export default Step1;
