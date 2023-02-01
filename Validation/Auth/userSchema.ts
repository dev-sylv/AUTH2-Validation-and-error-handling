import joi from "joi";

// VALIDATION SCHEMA OBJECT:

export const userSchema = {
    register: joi.object({
        name: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().min(8).required(),
    }),

    login: joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(8).required(),
    })
}