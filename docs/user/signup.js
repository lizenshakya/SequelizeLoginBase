module.exports = {
    post:{
        tags:['User CRUD operations'],
        description: "SignUp",
        operationId: "SignUp",
        parameters:[],
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/signupInput'
                    }
                }
            }
        },
        responses:{
        }
    }
}