const express = require("express");
const {
  createJob,
  getJob,
  getJobs,
  deleteJob,
  updateJob,
} = require("../controllers/jobs");

const router = express.Router();

router.route("/").get(getJobs).post(createJob);
router.route("/:id").get(getJob).patch(updateJob).delete(deleteJob);

module.exports = router;
