<br />
<div align="center">
  <h3 align="center">React-GraphCMS-Apollo Blog</h3>

  <p align="center">
    A simple personal blog created using ReactJS, GraphQL with Apollo as GraphQL client and <a href="https://graphcms.com">GraphCMS</a> as the GraphQL API provider.
    <br /><br />
    <a href="https://github.com/kevinadhiguna/RGA-blog/issues">Report Bug</a>
    ·
    <a href="https://github.com/kevinadhiguna/RGA-blog/issues">Request a Feature</a>
  </p>
</div>

<div align="center">
  <img alt="ReactJS" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
  <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
  <img alt="GraphQL" src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql" />
  <img alt="Apollo GraphQL client" src="https://img.shields.io/badge/-Apollo_GraphQL-311C87?style=for-the-badge&logo=apollo-graphql" />
</div>

## 📺 Demo

This app will show you the `title` you created in GraphCMS : <br><br>
<img src="https://s6.gifyu.com/images/kjabfckjdvdsv.png" width="90%" /> <br><br>

Other than `title`, the app will render the `post` that you created in GraphCMS : <br><br>
<img src="https://s6.gifyu.com/images/dsvgrdger.png" width="90%" /> <br><br>

For live preview, please visit <https://rga-blog-kevinadhiguna.netlify.app/> : <br><br>
<img src="https://s6.gifyu.com/images/skldasl.png" width="90%" />

## 📖 How to Run :

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


![Hello !](https://api.visitorbadge.io/api/VisitorHit?user=kevinadhiguna&repo=RGA-blog&label=thanks%20for%20dropping%20in%20!&labelColor=%23000000&countColor=%23FFFFFF)
