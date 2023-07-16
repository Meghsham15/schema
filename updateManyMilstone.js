const updateManyMilstone = {
    id: "ehh-ent-pro-umn-m",
  name: "Update Many milstone",
  description: "",
  authentication: true,
  model: {
    type: "object",
    properties: {
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
  },
  actions: ["update","updateMany"],
  resource: {
    resourceType: "externalApi",
    host: "http://localhost:4000",
  },
}

export {updateManyMilstone};