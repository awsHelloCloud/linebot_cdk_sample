#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { LambdaDemoStack } from '../lib/lambda_demo-stack';

const app = new cdk.App();
new LambdaDemoStack(app, 'LambdaDemoStack');
