const getOneProjectById = {
  id: "ehh-ent-pro-gid",
  name: "Get One project By Id",
  description: "",
  model: {
    type: "object",
    properties: {
      _id:{
        type:"string"
      }
    },
  },
  actions: ["getOneById", "getOne"],
  resource: {
   
    resourceType: "externalApi",
    host: "http://localhost:4000",
  },
};

export {getOneProjectById };
