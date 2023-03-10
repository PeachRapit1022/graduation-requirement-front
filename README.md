# 卒業要件確認サイト

大学の成績表（CSVファイル）を読み込み、卒業要件を満たしているかをチェックする。

バックエンドのリポジトリはこちら↓↓  
https://github.com/PeachRapit1022/graduation-requirement-back

開発ストーリーはこちら↓↓  
https://www.notion.so/f9a330e6a64e456596899c2ca1243634

## 使い方
https://graduation-requirement-front.netlify.app/
にアクセス

### 手順1
成績表CSVファイルをアップロードする。

### 手順2
卒業要件、進級要件の各項目を満たしているかを確認。  
満たしている場合は緑、そうでない場合は赤で表示し、直感的に確認することが可能。  
各項目はトグルリストで表示・非表示の変更ができる。

<img width="1271" alt="スクリーンショット 2023-01-19 10 52 28" src="https://user-images.githubusercontent.com/64301078/213338137-5f05cb79-a47d-49ba-876c-45126b080363.png">


### 手順3
データベースに存在しない単位が入力された場合、ユーザーが単位数・カテゴリを入力することが可能。

<img width="1295" alt="スクリーンショット 2023-01-19 10 51 58" src="https://user-images.githubusercontent.com/64301078/213338156-945ba38b-c216-4f5d-a293-b7435ca46b94.png">

## 今後追加する予定の機能
- ユーザーが投稿した未知の単位情報を全体データベースに統合する機能
- その単位情報を管理者が承認・却下する機能
