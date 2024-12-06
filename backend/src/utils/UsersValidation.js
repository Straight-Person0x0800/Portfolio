const Joi = require("joi");

// Common validation rules
const nameRule = Joi.string().min(3).max(50).required().messages({
  "string.empty": "Name is required.",
  "string.min": "Name must be at least 3 characters.",
  "string.max": "Name must be less than or equal to 100 characters.",
});

const emailRule = Joi.string().email().required().messages({
  "string.empty": "Email is required.",
  "string.email": "Please enter a valid email address.",
});

const passwordRule = Joi.string()
  .min(8)
  .max(255)
  .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
  .required()
  .messages({
    "string.empty": "Password is required.",
    "string.min": "Password must be at least 8 characters.",
    "string.max": "Password must be less than or equal to 255 characters.",
    "string.pattern.base":
      "Password must include at least one uppercase letter, one lowercase letter, and one number.",
  });

// Validation schemas
//Full schema
const fullUserSchema = Joi.object({
  name: nameRule,
  email: emailRule,
  password: passwordRule,
});

//loginSchema
const loginSchema = Joi.object({
  email: emailRule,
  password: passwordRule,
});

//Change UserOrEmailSchema
const changeUserOrEmailSchema = Joi.object({
  name : nameRule,
  email : emailRule
})

// Generic validation function
const validateInput = (schema, data) => {
  const { error } = schema.validate(data, { abortEarly: false }); // Show all errors
  return error
    ? { valid: false, errors: error.details.map((err) => err.message) }
    : { valid: true };
};

module.exports = {
  fullUserSchema,
  loginSchema,
  changeUserOrEmailSchema,
  validateInput,
};
