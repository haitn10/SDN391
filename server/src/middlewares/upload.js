const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

const storage = new GridFsStorage({
  url: process.env.MONGO_URI + "/storage",
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, res) => {
    const match = ["image/png", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-${req.body.name}`;
      return filename;
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-${req.body.name}`,
    };
  },
});

module.exports = multer({ storage });
