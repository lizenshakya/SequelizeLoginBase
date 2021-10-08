module.exports = {
    post:{
        tags:['Product CRUD operations'],
        description: "Create product",
        operationId: "createProduct",
        parameters:[],
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/ProductInput'
                    }
                }
            }
        },
        responses:{
            '201':{
                description: "Product created successfully"
            },
            '500':{
                description: 'Server error'
            }
        }
    }
}