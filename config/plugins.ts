export default ({ env }) => ({
upload: {
    config: {
      providerOptions: {
        localServer: {
          setHeaders: (res) => {
            // allow caching by CDNs and browsers for 7 days
            res.setHeader('Cache-Control', 'public, max-age=604800');
          },
        },
      },
    },
  },
});
