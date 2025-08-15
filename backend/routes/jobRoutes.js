const express = require('express');
const router = express.Router();
const { createJob, getJobs } = require('../controllers/jobController');
const validateRequest = require('../middleware/validateRequest');
const { createJobSchema } = require('../validators/jobValidation');

router.route('/')
  .get(getJobs)
  .post(validateRequest(createJobSchema), createJob);

module.exports = router;
