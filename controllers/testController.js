
// ess function ko isly banaye hai taki khi pe bhi ees function ko use kr skte hai call krke

const testController = (req, res) =>{
  res.status(200).json({
    message: "test routessssss",
    success: true,
  });
}

// export this function 
module.exports = {testController};