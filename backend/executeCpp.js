const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const outputPath = path.join(__dirname, "outputs");

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

const executeCpp = (filepath) => {
  const jobId = path.basename(filepath).split(".")[0];
  const outPath = path.join(outputPath, `${jobId}.out`);

  return new Promise((resolve, reject) => {
    exec(
      `g++ ${filepath} -o ${outPath} && cd ${outputPath} && ./${jobId}.out`,
      (error, stdout, stderr) => {
        console.log("Error-->", error);
        console.log("stdout-->", stdout);
        console.log("stderr-->", stderr);
        error && resolve({ error, stderr });
        stderr && resolve(stderr);
        resolve(stdout);
      }
    );
  });
};

module.exports = {
  executeCpp,
};
