import cdk = require('@aws-cdk/core');

import {LineLambdaConstruct} from '../constructs/lineContruct';

export class LineLambdaStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        new LineLambdaConstruct(this, 'LineLambdaConstruct');
    }
}