const getManyMilstone = {
    id: "ehh-ent-pro-gmm",
  name: "Get Many milstones",
  description: "Get Many milstones",
  model: {
    type: "object",
    properties: {
      _id:{
        type:"string"
      }
    },
  },
  actions: ["get"],
  resource: {
    resourceType: "externalApi",
    host: "http://localhost:4000",
  },
}

export {getManyMilstone};