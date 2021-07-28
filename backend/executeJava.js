const { exec } = require("child_process");

const executeJava = (filepath) => {
  return new Promise((resolve, reject) => {
    exec(`javac ${filepath}`, (error, stdout, stderr) => {
      error && reject({ error, stderr });
      stderr && reject(stderr);
      resolve(stdout);
    });
  });
};

module.exports = {
  executeJava,
};
