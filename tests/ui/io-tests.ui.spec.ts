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
