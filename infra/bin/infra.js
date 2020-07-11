#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { InfraStack } = require('../lib/infra-stack');

const app = new cdk.App();
new InfraStack(app, 'InfraStack');
