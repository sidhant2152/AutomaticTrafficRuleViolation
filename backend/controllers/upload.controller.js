const XLSX = require("xlsx");
const Challan = require("../models/Challan");
exports.handleUpload = async (req, res) => {
  try {
    const fileBuffer = req.file.buffer;
    // Process the Excel file from the buffer
    const workbook = XLSX.read(fileBuffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    // Iterate through each row in the sheet and save it to the database
    for (const row of sheetData) {
      const challan = new Challan({
        date: new Date(row["Date"]),
        vehicleNo: row["Vehicle No."],
        challanCategory: row["Challan Category"],
        vehicleCategory: row["Vehicle category"],
        amount: row["Amount"],
        location: row["Location"],
        time: row["Time"],
      });
      await challan.save();
    }

    // console.log(sheetData);
    res
      .status(200)
      .json({ message: "Challan details successfully uploaded and saved." });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "An error occurred while processing the file." });
  }
};
