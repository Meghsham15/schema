const getManyProject = {
  id: "ehh-ent-pro-gmp",
  name: "Get Many projects",
  description: "Get Many projects",
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
};

export { getManyProject };
