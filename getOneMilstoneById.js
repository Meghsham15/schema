const getOneMilstoneById = {
    id: "ehh-ent-pro-gid-m",
  name: "Get One milstone By Id",
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
}

export {getOneMilstoneById};