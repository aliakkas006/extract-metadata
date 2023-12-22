import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, './uploads');
  },

  filename: (_req, file, cb) => {
    const fileExtension = path.extname(file.originalname);
    const fileName =
      file.originalname
        .replace(fileExtension, '')
        .toLocaleLowerCase()
        .split(' ')
        .join('-') +
      '-' +
      uuidv4() +
      fileExtension;

    cb(null, fileName);
  },
});

const upload = multer({ storage });

export default upload;
