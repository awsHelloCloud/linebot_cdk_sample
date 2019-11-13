#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import {IstackProps} from '../lib/IstackProps';
// import { LambdaDemoStack } from '../lib/lambda_demo-stack';
import {LineLambdaStack} from '../lib/stacks/lineLambdaStack';
const stackProps: IstackProps = {
    env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION
    }
};

const prefix = 'hackthon';

const app = new cdk.App();
// new LambdaDemoStack(app, 'LambdaDemoStack');

new LineLambdaStack(app, `${prefix}LineTransfer`, stackProps);