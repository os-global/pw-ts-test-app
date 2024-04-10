import { test as base } from "../fixtures/test.options";
import * as fs from "fs";

type Fixtures = {
  uploadTestsFilePath: string;
};

export const test = base.extend<Fixtures>({
  uploadTestsFilePath: async ({ randomString }, use) => {
    const filePath = `./tmp/testCases-${randomString}.csv`;
    const data = [
      ["Summary", "Description"],
      ["Test 1", "This is a description for Test 1"],
      ["Test 2", "This is a description for Test 2"],
      ["Test 3", "This is a description for Test 3"],
    ];
    const csvContent = data.map((row) => row.join(",")).join("\n");
    fs.writeFile(filePath, csvContent, (err) => {
      if (err) {
        console.error("Error writing file:", err);
      } else {
        console.log("File written successfully");
      }
    });
    await use(filePath);
    // teardown
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error("Error deleting file:", err);
      } else {
        console.log("File deleted successfully");
      }
    });
  },
});
