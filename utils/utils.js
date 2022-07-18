const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const writeToJsonFile = (filename, content) => {
  fs.writeFileSync(filename, JSON.stringify(content), "utf-8");
  console.log(`changes saved to the file $filename`);
};

const getNewId = () => {
  return uuidv4();
};

module.exports = {
  writeToJsonFile,
  getNewId,
};
//check console for errors
