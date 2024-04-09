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

test(
  "upload tests",
  { tag: ["@ui", "@regression"] },
  async ({ newUserApp: { testCases }, uploadTestsFilePath }) => {
    await testCases.open();
    const initialTestsCount = await testCases.getTestsHeaderCount();
    await testCases.uploadTests(uploadTestsFilePath);
    const csvLineCount = await new IoHelper().countLines(`./tmp/testCases.csv`);
    await testCases.verifyTestsHeaderCount(initialTestsCount + csvLineCount);
  }
);
