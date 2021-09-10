# React Firebase 연동

## Navigation 구현

- yarn add react-router-dom

## 컴포넌트 생성

- src/comps 폴더생성
- Header.jsx, MainNav.jsx, BBsMain.jsx 컴포넌트 생성

## firebase 연동

- yarn add firebase 설치
- 2021-09 현재 설치되는 firebase SDK 9.0.x 인데 연동과정에서 문제가 발생하고 있다
- 그래서 8.10.0버전을 사용할 예정
- yarn add firease@8.10.0 // npm install firebase@8.10.0

## 날짜와 시간 설정을 위한 momnet 설치

- yarn add moment

## firebase에 호스팅

- 내가 만든 프로젝트를 다른사람이 다른 컴퓨터에서 다른 브라우져로 접속할 수 있도록 외부의 서버에 deploy하기

## 배포 도구 설치

- npm install -g firebase-tools / 구버전 firebase-cli
- firebase-tools를 설치하는데 오류가 발생하는경우 : npm uninstall -g firebase-cli

## react 프로젝트를 firebase 에 배포하기

- 프로젝트 build : yarn build
- firebase login 하기 : firebase login
- 프로젝트에 firebase deploy 설정하기 : firebase init hosting
- 프로젝트를 firebase Deploy(배포하기)
  : firebase deploy --only hosting

## 수정후 재 배포

- yarn build
- firebase deploy --only hosting
