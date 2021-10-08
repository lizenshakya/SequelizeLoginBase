module.exports = {
    components:{
        schemas:{
            productId:{
                type:'string',
                description:"An id of a products",
                example: "tyVgf"
            },
            Product:{
                type:'object',
                properties:{
                    productName:{
                        type:'string',
                        description:"Name of the product",
                        example:"Tshirt"
                    },
                    isDeleted:{
                        type:"boolean",
                        description:"The status of the todo",
                        example:false
                    }
                }
            },
            ProductInput:{
                type:'object',
                properties:{
                    productName:{
                        type:'string',
                        description:"Name of the product",
                        example:"Tshirt"
                    },
                    productPrice: {
                        type:'decimal',
                        description:"Price of the product",
                        example:1000.00
                    },
                    quantity: {
                        type:'integer',
                        description:"Quantity of the product",
                        example:10
                    }
                }
            },
            signinInput:{
                type:'object',
                properties:{
                    email:{
                        type:'string',
                        description:"Email of user",
                        example:"Hari@yopmail.com"
                    },
                    password: {
                        type:'string',
                        description:"password of user",
                        example:"Test@123"
                    }
                }
            },
            signupInput:{
                type:'object',
                properties:{
                    name:{
                        type:'string',
                        description:"Name of the user",
                        example:"Hari"
                    },
                    email: {
                        type:'string',
                        description:"Email of the user",
                        example: "Hari@yopmail.com"
                    },
                    role: {
                        type:'string',
                        description:"Role of the user",
                        example: "admin"
                    },
                    password: {
                        type:'string',
                        description:"password of user",
                        example:"Test@123"
                    }
                }
            },
            Error:{
                type:'object',
                properties:{
                    message:{
                        type:'string'
                    },
                    internal_code:{
                        type:'string'
                    }
                }
            }
        }
    }
}