const mockedResponse = {
  data: {
    items: [
      {
        commit: {
          author: {
            name: "name one",
          },
          message: "commit one",
        },
        sha: "SHA1",
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockedResponse),
};
