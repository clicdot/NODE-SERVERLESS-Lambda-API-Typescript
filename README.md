# Serverless Lambda-API in Typescript

## Getting Started

### Starting local development

> You need serverless installed globally

```bash
$ sudo npm i -g serverless
```

Install NPM Packages

```bash
$ npm i
```

Run Serverless Offline

```bash
$ npm run start:sls
```

### Deploying to AWS Lambda

[Get AWS Credentials](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-your-credentials.html)

```bash
$ sls deploy --file serverless.yml --aws-profile <serverless-profile>
```
