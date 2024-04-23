import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
     // console.log(file.fieldname , file.mimetype , file.originalname);
    const currentDate= new Date(Date.now());
      
    // Extract year, month, and day from the Date object
    const year = currentDate.getFullYear(); // Get the full year (e.g., 2024)
    const month = currentDate.getMonth() + 1; // Get the month (0-indexed, add 1 for human-readable month)
    const day = currentDate.getDate(); // Get the day of the month

    // Format the extracted components into a string (e.g., "2024-03-14")
    const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
     
      cb(null, file.originalname + '-' + formattedDate)
    }
})
  
export const upload = multer({ storage: storage });