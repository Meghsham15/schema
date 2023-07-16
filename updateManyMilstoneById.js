const updateManyMilstoneById = {
    id: "ehh-ent-pro-umn-mid",
  name: "Update Many milstone by id",
  description: "",
  authentication: true,
  model: {
    type: "object",
    properties: {
        _id:{
            type:"string"
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
  },
  actions: ["update"],
  resource: {
    resourceType: "externalApi",
    host: "http://localhost:4000",
  },
}

export {updateManyMilstoneById};