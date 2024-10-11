import Joi from "joi";

const userSchema = Joi.object({
  name: Joi.string().trim().regex(/^[a-zA-Z0-9\s]+$/).min(2).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: false } })
    .required(),
  password: Joi.string().min(6).max(30).required(),
});

export default userSchema;
