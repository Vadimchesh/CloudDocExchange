# CloudDocExchange

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

![image](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![image](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)

CloudDocExchange is a tool to exchange large documents between cloud services.

## client

Disided to use React for the client. The client is located in the client folder. To run the client, you need to install the dependencies with `npm install` and then run `npm start`. The client will be available at `localhost:3000`.

### client structure

```bash
client
   |-- cdk
   |   |-- StaticSiteConstruct.ts (cdk construct for static site)
   |   |-- index.ts (cdk entry point)
   |-- components.json (UI components)
   |-- esbuild.config.mjs (esbuild config for CDK)
   |-- index.html (entry point website)
   |-- public
   |-- src
   |   |-- App.tsx
   |   |-- components (UI components)
   |   |   |-- ui
   |   |-- index.css
   |   |-- lib
   |   |-- main.tsx (entry point TSX)
   |-- tailwind.config.js
   |-- tsconfig.cdk.json (tsconfig for CDK)
   |-- tsconfig.json (tsconfig for client)
   |-- tsconfig.node.json (tsconfig for node)
   |-- vite.config.ts (vite config)
```

## server

in progress

## deployment

```bash
# build client
cd client
npm run build
# deploy client
npm run cdk deploy
```

Deployed version https://d3bjw047xpqkuj.cloudfront.net/
