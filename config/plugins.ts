export default ({ env }) => ({
upload: {
    config: {
      providerOptions: {
        localServer: {
          maxage: 604800, // 7 days in seconds
        },
      },
    },
  },
});
