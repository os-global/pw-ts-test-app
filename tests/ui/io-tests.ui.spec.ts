import { test } from "../../src/fixtures";
import { IoHelper } from "../../src/helpers/io.helper";

test(
  "download tests",
  { tag: ["@ui", "@regression"] },
  async ({ defaultUserApp: { testCases } }) => {
    await testCases.open();
    await testCases.downloadTests(`./tmp/testCases.csv`);
    const csvLineCount = await new IoHelper().countLines(`./tmp/testCases.csv`);
    await testCases.verifyTestsHeaderCount(csvLineCount);
  }
);

test.only(
  "upload tests",
  { tag: ["@ui", "@regression"] },
  async ({ newUserApp: { testCases }, uploadTestsFilePath }) => {
    await testCases.open();
    const initialTestsCount = await testCases.getTestsHeaderCount();
    console.log(`File to upload ${uploadTestsFilePath}`)
    // list files in ./tmp directory
    const fs = require('fs');
    fs.readdir('./tmp', (err, files) => {
      files.forEach(file => {
        console.log(file);
      });
    });
    await testCases.uploadTests(uploadTestsFilePath);
    const csvLineCount = await new IoHelper().countLines(uploadTestsFilePath);
    await testCases.verifyTestsHeaderCount(initialTestsCount + csvLineCount);
  }
);
