const getOneActorRole = {
  id: "ehh-act-pro-gon-ar",
  name: "Get One actor role",
  description: "Get One actor role",
  model: {
    type: "object",
    properties: {
      _id:{
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

export { getOneActorRole };
