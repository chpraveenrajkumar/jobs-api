const getJobs = async (req, res) => {
  req.send("get all jobs");
};

const getJob = async (req, res) => {
  req.send("get job");
};
const createJob = async (req, res) => {
  req.send("create job");
};

const updateJob = async (req, res) => {
  req.send("update job");
};
const deleteJob = async (req, res) => {
  req.send("delete job");
};

module.exports = {
  getJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
