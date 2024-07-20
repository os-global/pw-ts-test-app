import { test } from "@fixtures/.";

const testCases = [
  { title: "Dashboard", path: "/" },
  { title: "Rating", path: "/rating/" },
  { title: "Test Cases", path: "/tests/" },
  { title: "Test Runs", path: "/runs/" },
  { title: "Create new test", path: "/test/new/" },
  { title: "Demo pages", path: "/demoPages/" },
  { title: "Demo controls", path: "/demoControls/" },
];

for (const { title, path } of testCases) {
  test(`verify navigation to '${title}' page`, async ({
    defaultUserApp,
    baseURL,
  }) => {
    await defaultUserApp.navigate.goto("/");
    await defaultUserApp.navigate.openMenuItem(title);
    await defaultUserApp.navigate.verifyUrl(`${baseURL}${path}`);
  });
}
