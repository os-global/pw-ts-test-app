import * as fs from "fs";
import csv from "csv-parser";
import { step } from "../misc/reporters/step";

export class IoHelper {
  @step()
  public async countLines(filePath: string): Promise<number> {
    return new Promise((resolve, reject) => {
      let rowCount = 0;

      fs.createReadStream(filePath)
        .pipe(csv())
        .on("data", () => {
          rowCount++;
        })
        .on("end", () => {
          resolve(rowCount);
        })
        .on("error", reject);
    });
  }
}
