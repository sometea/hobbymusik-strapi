export default ({ env }) => ({
upload: {
    config: {
      providerOptions: {
        localServer: {
          maxage: 604800000, // 7 days in ms
        },
      },
    },
  },
});
