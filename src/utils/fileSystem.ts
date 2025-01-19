import { Workbook } from "exceljs";
import axios from "axios";
import fs from "fs";

export const storeFileAndReturnNameBase64 = async (base64: string) => {
  const tempBase64 = base64.split(",");
  const extension = tempBase64[0].split("/")[1];
  const filename = new Date().getTime() + `.${extension.split(";")[0]}`;
  return new Promise((resolve, reject) => {
    fs.writeFile(`./public/uploads/${filename}`, tempBase64[1], "base64", (err) => {
      if (err) {
        console.error(err);
        reject(err);
      }
      console.log();
      resolve(filename);
    });
  });
};

export const storeExcelAndReturnName = async (workbook: Workbook, filename_prefix = "") => {
  try {
    const filename = `${filename_prefix}${new Date().getTime()}.xlsx`;
    const filePath = `./public/uploads/${filename}`;

    // Save the workbook to a file
    await workbook.xlsx.writeFile(filePath);

    return filename;
  } catch (error) {
    console.error("Error storing Excel file:", error);
    throw error; // Re-throw the error for proper handling
  }
};

export const convertImageUrlToBase64 = async (url: string): Promise<string | undefined> => {
  try {
    console.log(url, "IMAGE URL");
    const response = await axios.get(url, {
      responseType: "arraybuffer",
    });

    // Extract MIME type from the response headers
    const contentType = response.headers["content-type"];

    if (!contentType) {
      throw new Error("Could not determine MIME type");
    }

    const buffer = Buffer.from(response.data, "binary");
    const base64 = buffer.toString("base64");

    return `data:${contentType};base64,${base64}`;
  } catch (error: any) {
    console.error(`Failed to fetch or convert image: ${error.message}`);
  }
};
