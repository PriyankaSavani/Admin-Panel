import Joi from 'joi'

// signIn validtaion schema
const SignInSchema = Joi.object({
    email: Joi
        .string()
        .empty('')
        .email({
            minDomainSegments: 2,
            tlds: { allow: ['com', 'net'] }
        })
        .required()
        .label('Email ID'),
    password: Joi
        .string()
        .empty('')
        .regex(/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,30}$/)
        .required()
        .label('Password')
        .messages({
            'string.pattern.base': 'Password must be strong like - Use at least 8 characters and Use a mix of letters (uppercase and lowercase), numbers, and special characters'
        })

})

// addUser validation schema
const AddUserSchema = Joi.object({
    name: Joi
        .string()
        .empty('')
        .required()
        .label('User Name'),
    email: Joi
        .string()
        .empty('')
        .email({
            minDomainSegments: 2,
            tlds: { allow: ['com', 'net'] }
        })
        .required()
        .label('Email ID'),
    gender: Joi
        .string()
        .label('Gender'),
    status: Joi
        .string()
        .label('Status')
})

// editUser validation schema
const EditUserSchema = Joi.object({
    id: Joi
        .number()
        .empty('')
        .required()
        .label('Id'),
    name: Joi
        .string()
        .empty('')
        .required()
        .label('User Name'),
    email: Joi
        .string()
        .empty('')
        .email({
            minDomainSegments: 2,
            tlds: { allow: ['com', 'net'] }
        })
        .required()
        .label('Email ID'),
    gender: Joi
        .string()
        .label('Gender'),
    status: Joi
        .string()
        .label('Status')
})

// addPost validation schema
const AddPostSchema = Joi.object({
    user: Joi
        .string()
        .empty('')
        .required()
        .label('User'),
    title: Joi
        .string()
        .empty('')
        .required()
        .label('Title'),
    body: Joi
        .string()
        .empty('')
        .required()
        .label('Body')
})

// editPost validation schema
const EditPostSchema = Joi.object({
    id: Joi
        .number()
        .empty('')
        .required()
        .label('Id'),
    user_id: Joi
        .number()
        .empty('')
        .required()
        .label('User Id'),
    title: Joi
        .string()
        .empty('')
        .required()
        .label('Title'),
    body: Joi
        .string()
        .empty('')
        .required()
        .label('Body')
})

export { SignInSchema, AddUserSchema, EditUserSchema, AddPostSchema, EditPostSchema } 