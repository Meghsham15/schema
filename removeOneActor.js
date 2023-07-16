const removeOneActor = {
  id: "ehh-act-pro-don-a",
  authentication: true,
  authorisation: [],
  model: {
    type: "object",
      properties: {
        _id: {
          type: "string",
        },
      },
  },
  action: ["deleteOne"],
  resource: {
    resourceType: "externalApi",
        host: "http://localhost:4000",
  },
};

export { removeOneActor };
