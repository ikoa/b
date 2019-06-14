// import { Client } from 'pg';
// const client = new Client({
//     host: '[データベースのホスト]',
//     database: '[データベース名]',
//     user: '[ユーザーID]',
//     password: '[パスワード]'
// });
// client.connect();

module.exports = {
    teiji: () => {
        return isSuccess() ? ":sexygirl1: < 定時退社成功！" : ":sexygirl1: < 定時退社失敗…";
    }
};

const isSuccess = () => {
    return Math.floor(Math.random()*2) === 0;
};
