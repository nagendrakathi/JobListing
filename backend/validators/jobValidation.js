const Joi = require('joi');

const createJobSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  company: Joi.string().min(2).max(100).required(),
  location: Joi.string().min(2).max(100).required(),
  jobType: Joi.string().valid('FullTime', 'PartTime', 'Contract', 'Internship').insensitive().required(),
  salaryRange: Joi.string().pattern(/^\d+-\d+$/).required(),
  description: Joi.string().min(10).required(),
  requirements: Joi.string().allow(''),
  responsibilities: Joi.string().allow(''),
  applicationDeadline: Joi.date().greater('now').required()
});

module.exports = {
  createJobSchema
};
