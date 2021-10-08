module.exports = {
    get:{
        tags: ['Product CRUD operations'],
        description: "Get products",
        operationId: 'getProducts',
        parameters:[],
        responses:{
            '200':{
                description:"Products were obtained",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Product'
                        }
                    }
                }
            }
        }
    }
}