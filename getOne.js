const getOne = {
  id: "ehh-ent-pro-gon",
  name: "Get One project",
  description: "Get One project",
  model: {
    type: "object",
    properties: {
      name:{
        type:"string"
      }
    },
  },
  actions: ["getOne"],
 resource: {
    resourceType: "externalApi",
    host: "http://localhost:4000",
  },
};

export { getOne };
