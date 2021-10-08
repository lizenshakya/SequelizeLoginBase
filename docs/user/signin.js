module.exports = {
    post:{
        tags:['User CRUD operations'],
        description: "SignIn",
        operationId: "SignIn",
        parameters:[],
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/signinInput'
                    }
                }
            }
        },
        responses:{
        }
    }
}