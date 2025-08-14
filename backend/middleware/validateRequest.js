const Joi = require('joi');

const validateRequest = (schema) => {
  return (req, res, next) => {
    const options = {
      abortEarly: false, // include all errors
      allowUnknown: true, // ignore unknown props
      stripUnknown: true  // remove unknown props
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
