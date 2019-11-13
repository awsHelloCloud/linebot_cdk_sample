import path = require('path');

import cdk = require('@aws-cdk/core');

import apigateway = require('@aws-cdk/aws-apigateway');
import lambda = require('@aws-cdk/aws-lambda');
import {FollowMode} from '@aws-cdk/assets';

export class LineLambdaConstruct extends cdk.Construct {
    constructor(scope: cdk.Construct, id: string) {
        super(scope, id);
        
        const lambdaFunction = new lambda.Function(this, 'lineTransferFunction', {
            runtime: lambda.Runtime.NODEJS_10_X,
            handler: 'index.handler',
            code: lambda.Code.fromAsset(path.join(__dirname,'../../assets/fnbot'), {
                follow: FollowMode.EXTERNAL
            }),
            timeout: cdk.Duration.seconds(30)
        });

        const api = new apigateway.RestApi(this, 'lineApi', {
            restApiName: '/line_transfer'
        });

        const lineLambdaIntegration = new apigateway.LambdaIntegration(
            lambdaFunction,
            {requestTemplates: {
                'application/json': '{"statusCod": ""200}'
            }}
        );
        api.root.resourceForPath('/line_transfer').addMethod('POST', lineLambdaIntegration);
    }
}