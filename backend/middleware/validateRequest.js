const Joi = require('joi');

const validateRequest = (schema) => {
  return (req, res, next) => {
    const options = {
      abortEarly: false, 
      allowUnknown: true,
      stripUnknown: true 
    };

    const { error, value } = schema.validate(req.body, options);

    if (error) {
      return res.status(400).json({
        message: 'Validation error',
        details: error.details.map(x => x.message)
      });
    } else {
      req.body = value;
      next();
    }
  };
};

module.exports = validateRequest;