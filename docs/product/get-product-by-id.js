module.exports = {
    get:{
        tags:['Product CRUD operations'],
        description: "Get a product",
        operationId: "getProduct",
        parameters:[
            {
                name:"productId",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/productId"
                },
                required:true,
                description: "A single product id"
            }
        ],
        responses:{
            '200':{
                description:"Product is obtained",
                content:{
                    'application/json':{
                        schema:{
                            $ref:"#/components/schemas/Product"
                        }
                    }
                }
            },
            '404':{
                description: "Todo is not found",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Error',
                            example:{
                                message:"We can't find the todo",
                                internal_code:"Invalid id"
                            }
                        }
                    }
                }
            }
        }
    }
}
