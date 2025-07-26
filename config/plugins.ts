export default ({ env }) => ({
    upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        credentials: {
          accessKeyId: env('HETZNER_ACCESS_KEY_ID'),
          secretAccessKey: env('HETZNER_ACCESS_SECRET'),
        },
        region: env('HETZNER_REGION'),
        baseUrl: `https://${env('HETZNER_BUCKET')}.${env('HETZNER_REGION')}.${env('HETZNER_BASE_URL')}`,
        endpoint: `https://${env('HETZNER_REGION')}.${env('HETZNER_BASE_URL')}`,
        params: {
          Bucket: env('HETZNER_BUCKET'),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
