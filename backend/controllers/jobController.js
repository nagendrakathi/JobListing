const Job = require('../models/Job');

// Create Job
exports.createJob = async (req, res, next) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json(job);
  } catch (error) {
    next(error);
  }
};

// Get Jobs with filters
exports.getJobs = async (req, res, next) => {
  try {
    let query = {};

    if (req.query.title && req.query.title !== 'null' && req.query.title.trim() !== '') {
      query.title = { $regex: req.query.title, $options: 'i' };
    }

    if (req.query.location && req.query.location !== 'null' && req.query.location.trim() !== '') {
      query.location = { $regex: req.query.location, $options: 'i' };
    }

    if (req.query.jobType && req.query.jobType !== 'null' && req.query.jobType.trim() !== '') {
      query.jobType = req.query.jobType;
    }

    if (req.query.minSalary && req.query.maxSalary) {
      const min = Number(req.query.minSalary);
      const max = Number(req.query.maxSalary);

      query.$expr = {
        $and: [
          {
            $lte: [
              { $toInt: { $arrayElemAt: [{ $split: ["$salaryRange", "-"] }, 1] } },
              max
            ]
          },
          {
            $gte: [
              { $toInt: { $arrayElemAt: [{ $split: ["$salaryRange", "-"] }, 0] } },
              min
            ]
          }
        ]
      };
    }

    const jobs = await Job.find(query).sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (error) {
    next(error);
  }
};
