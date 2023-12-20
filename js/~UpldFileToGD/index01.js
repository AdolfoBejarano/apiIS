import { AirplaneFile } from "airplane";

export default async function (params) {
  const file = new AirplaneFile(params.example_file);

  // Download the file and print to stdout:
  const body = await file.text();
  console.log(body);
}