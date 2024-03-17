# CloudDocExchange

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

![image](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![image](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)

CloudDocExchange is a tool to exchange large documents between cloud services.

## Client

Disided to use React for the client. The client is located in the client folder. To run the client, you need to install the dependencies with `npm install` and then run `npm run dev`. The client will be available at `localhost:3000`.

### Client Structure

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

### Static Site Stack

This stack is responsible for deploying a static website using AWS services. It uses the AWS CDK (Cloud Development Kit) to define the infrastructure in TypeScript.

Key components of the stack include:

- **S3 Bucket**: This is where the static website files are stored. The bucket is configured to block all public access and uses S3 managed encryption.

- **CloudFront Distribution**: This is the CDN (Content Delivery Network) for the static website. It's configured to serve the website over HTTPS only and uses a cache policy for optimized caching.

- **Origin Access Control**: This is used to control access to the S3 bucket from the CloudFront distribution. It replaces the legacy Origin Access Identity.

- **Bucket Deployment**: This deploys the static website files from the local `./dist` directory to the S3 bucket and invalidates the CloudFront cache.

The stack also defines the removal policies for the CloudFront distribution and the Origin Access Control, and outputs the S3 bucket URL and the CloudFront URL.

### Deploying the Static Site

```bash
# build client
cd client
npm run build
# deploy client
npm run cdk deploy
```

Deployed version https://d3bjw047xpqkuj.cloudfront.net/

## Server

Server: NestJS + TypeScript

To run the server, you need to install the dependencies with `npm install` and then run `npm run start:dev`. The server will be available at `localhost:3000`.
