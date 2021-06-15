# React GraphQL Apollo Blog

A simple personal blog created using ReactJS, GraphQL with Apollo as GraphQL client and GraphCMS as the GraphQL API provider.

## Demo

This app will show you the `title` you created in GraphCMS : <br><br>
<img src="https://raw.githubusercontent.com/kevinadhiguna/rga-blog/master/demo/1.png" width="90%"></img> <br><br>

Other than `title`, the app will render the `post` that you created in GraphCMS : <br><br>
<img src="https://raw.githubusercontent.com/kevinadhiguna/rga-blog/master/demo/2.png" width="90%"></img>

## How to Run :

In the project directory, you can run these commands :

1) Create an application configuration file in JSON (`appConfig.json`), by copying `appConfig.dev.json` :
```bash
cp appConfig.dev.json appConfig.json
```

2) Please fill the `appConfig.json` with your GraphCMS URI. For example :
```diff
{
- "GRAPHCMS_URI": ""
+ "GRAPHCMS_URI": "https://api-ap-northeast-1.graphcms.com/v2/dfe3e5s3r8j73qw3ds14276c/master"
}
```

Unlike `appConfig.dev.json` that will handle application configuration for development environment, `appConfig.json` will not be tracked by Git (also not being uploaded to GitHub, GitLab, and other Git hosting services). So, this does not violate Config in The Twelve-Factor App (a methodology to build SaaS). For more, please have a look at https://12factor.net/config.

3) Install Dependencies :
```bash
yarn
```

4) Run this app on your browser :
```bash
yarn start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

[![Visits Badge](https://badges.pufler.dev/visits/kevinadhiguna/RGA-blog)](https://github.com/kevinadhiguna)
