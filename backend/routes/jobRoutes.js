const express = require('express');
const router = express.Router();
const { createJob, getJobs, updateJob, deleteJob } = require('../controllers/jobController');
const validateRequest = require('../middleware/validateRequest');
const { createJobSchema } = require('../validators/jobValidation');

router.route('/')
  .get(getJobs)
  .post(validateRequest(createJobSchema), createJob);

router.route('/:id')
  .put(updateJob)
  .delete(deleteJob);

module.exports = router;
