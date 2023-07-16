const getPermissionOfRoleById = {
    id: "ehh-ent-pro-gpr-bi",
    name: "Get permission of role by id",
    description: "Get the permission of the role of the project by id",
    
    model: {
      type: "object",
      properties: {
        _id: {
          type: "string",
        },
      },
      
    },
    actions: ["getOne"],
    resource: {
      resourceType: "externalApi",
          host: "http://localhost:4000",
    },
}

export {getPermissionOfRoleById};