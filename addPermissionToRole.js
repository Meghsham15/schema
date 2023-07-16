const addPermissionToRole = {
    id: "ehh-rle-pro-aptr",
    name: "Add permission to the role",
    description: "",
    authentication: true,
    model: {
        type: "object",
        properties: {
            role: {
                type: "String",
            },
            permission: {
                type: "String",
            },
        },
    },
    actions: ["insertOne"],
    resource: {
        resourceType: "externalApi",
        host: "http://localhost:4000",
    },
};

export { addPermissionToRole };