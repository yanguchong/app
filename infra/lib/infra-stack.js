const cdk = require('@aws-cdk/core');

class InfraStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // The code that defines your stack goes here
    super(scope, id, props);

    this.code = new s3.Bucket(this, props.CODE_BUCKET_NAME, {
        removalPolicy: cdk.RemovalPolicy.ORPHAN,
        encryption: s3.BucketEncryption.KMS_MANAGED
    });

    new cdk.CfnOutput(this, 'codeBucketArn', {
        value: this.code.bucketArn,
    });
    new cdk.CfnOutput(this, 'codeBucketName', {
      value: this.code.bucketName,
    }); 
  }
}

module.exports = { InfraStack }
