const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// mongoose.connect(
//   "mongodb+srv://sem-ank_915:cmaklmn@cluster0.w8kvd.mongodb.net/myFirstDatabase",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (err) => {
//     // err && console.error(err);
//     console.log("Successfully connected to MongoDB: compilerdb");
//   }
// );

// const { generateFile } = require("./generateFile");
var axios = require("axios");
// const { executeCpp } = require("./executeCpp");

// const { addJobToQueue } = require("./jobQueue");
// const Job = require("./models/Job");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.post("/run", async (req, res) => {
//   const { language = "cpp", code, input } = req.body;

//   console.log(language, "Length:", code.length, input);

//   if (code === undefined) {
//     return res.status(400).json({ success: false, error: "Empty code body!" });
//   }
//   // // need to generate a c++ file with content from the request
//   const filepath = await generateFile(language, code);
//   console.log(filepath);
//   const data = await executeCpp(filepath, input);
//   console.log(data);

//   // // write into DB
//   // const job = await new Job({ language, filepath }).save();
//   // const jobId = job["_id"];
//   // addJobToQueue(jobId);
//   res.status(201).json({ data });
// });
app.post("/codex", async (req, res) => {
  const { language = "cpp", code, input } = req.body;
  console.log(language, "Length:", code.length, input);

  var data = JSON.stringify({
    code: code,
    language: language,
    input: input,
  });

  var config = {
    method: "post",
    url: "https://codexweb.netlify.app/.netlify/functions/enforceCode",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  var ress;
  await axios(config)
    .then(function (response) {
      ress = response.data;
      // console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  console.log(ress);
  res.send(ress);
});
app.get("/",(req,res)=>{
	res.send("Hello");
})
// app.get("/status", async (req, res) => {
//   const jobId = req.query.id;

//   if (jobId === undefined) {
//     return res
//       .status(400)
//       .json({ success: false, error: "missing id query param" });
//   }

//   const job = await Job.findById(jobId);

//   if (job === undefined) {
//     return res.status(400).json({ success: false, error: "couldn't find job" });
//   }
//   console.log(job);
//   return res.status(200).json({ success: true, job });
// });

app.listen(5002, () => {
  console.log(`Listening on port 5000!`);
});
exports.api = functions.https.onRequest(app);