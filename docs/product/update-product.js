module.exports = {
    put:{
        tags:['Product CRUD operations'],
        description: "Update product",
        operationId: "updateProduct",
        parameters:[
            {
                name:"productId",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/productId"
                },
                required:true,
                description: "Id of product to be updated"
            }
        ],
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

            '200':{
                description: "Product updated successfully"
            },
            '404':{
                description: "Product not found"
            },
            '500':{
                description: "Server error"
            }
            
        }
    }
}