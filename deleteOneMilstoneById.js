const deleteOneMilstoneById ={
    id: "ehh-ent-pro-don-mid",
    name: "Delete One milstone by id",
    description: "",
    authentication: true,
    model: {
      type: "object",
      properties: {
        _id:{
          type:"String"
        }
      },
    },
    actions: ["deleteOneById"],
    resource: {
      resourceType: "externalApi",
          host: "http://localhost:4000",
    },
}

export {deleteOneMilstoneById};