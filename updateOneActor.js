const updateOneActor = {
  id: "ehh-act-pro-uon-a",
  name: "update one actor",
  description: "",
  authentication: true,
  model: {
    type: "object",
    properties: {
      _id: {
        type: "string",
      },
      name: {
        type: "string",
        maxLength: 255,
      },
      content: {
        type: "string",
        maxLength: 255,
      },
      moto: {
        type: "string",
        maxLength: 255,
      },
      logo: {
        type: "string",
      },
    },
    actions: ["updateOne"],
    resource: {
      resourceType: "externalApi",
      host: "http://localhost:4000",
    },
  },
};

export { updateOneActor };
