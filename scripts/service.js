// import { Client } from 'pg';
// const client = new Client({
//     host: '[データベースのホスト]',
//     database: '[データベース名]',
//     user: '[ユーザーID]',
//     password: '[パスワード]'
// });
// client.connect();

module.exports = {
    teiji: (name) => {
        return isSuccess() ?
            ":sexygirl1: < 成功！　　" + " `" + name + "の勝率:" + 0 +"勝" + 0 + "敗`":
            ":sexygirl1: < 失敗・・・" + " `" + name + "の勝率:" + 0 +"勝" + 0 + "敗`";
    }
};

const isSuccess = () => {
    return Math.floor(Math.random()*2) === 0; // 0 or 1
};
