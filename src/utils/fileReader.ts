import XLSX from "xlsx";

/**
 * Reads an xlsx file from the given filePath and converts the first sheet to JSON.
 *
 * @param {string} filePath - the path to the xlsx file to be read
 * @return {unknown[]} the JSON representation of the xlsx file
 */
export function xlsxReader(filePath: string): unknown[] {
  // https://stackoverflow.com/questions/30859901/parse-xlsx-with-node-and-create-json
  let workbook = XLSX.readFile(filePath);
  let sheet_name_list = workbook.SheetNames;
  return XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
}
     