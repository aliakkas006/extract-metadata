import tesseract from 'tesseract.js';
import Metadata from '../model/Metadata.js';

const extractMetadata = async (filePath) => {
  const fileExtension = filePath.split('.').pop().toLowerCase();

  if (
    fileExtension === 'jpg' ||
    fileExtension === 'jpeg' ||
    fileExtension === 'png'
  ) {
    try {
      const {
        data: { text },
      } = await tesseract.recognize(filePath, 'eng');
      
      const {
        data: { lines },
      } = await tesseract.recognize(filePath, 'eng');

      const dimensions = `${lines.length}x${
        text.split(' ').length / lines.length
      }`;

      const metadata = await Metadata.create({
        fileType: 'image',
        fileName: filePath.split('/').pop(),
        textContent: text,
        dimensions,
      });

      return {
        fileType: 'image',
        fileName: metadata.fileName,
        metadata: {
          textContent: text,
          dimensions,
        },
      };
    } catch (err) {
      console.error('Error extracting metadata:', err);
      throw err;
    }
  }
};

export default extractMetadata;

/* 
import tesseract from 'tesseract.js';
import pdfParser from 'pdf-parse';
import fs from 'fs';

const extractMetadata = async (filePath) => {
  try {
    const metadata = {};

    const fileExtension = filePath.split('.').pop().toLowerCase();

    if (
      fileExtension === 'jpg' ||
      fileExtension === 'jpeg' ||
      fileExtension === 'png'
    ) {
      const {
        data: { text },
      } = await tesseract.recognize(filePath, 'eng');
      metadata.text = text;
    } else if (fileExtension === 'pdf') {
      const pdfBuffer = fs.readFileSync(filePath);

      const pdfData = await pdfParser(pdfBuffer);

      metadata.text = pdfData.text;
      metadata.author = pdfData.metadata.Author || null;
      metadata.title = pdfData.metadata.Title || null;
      metadata.dimensions = pdfData.metadata.Dimensions || null;
      metadata.createdAt = pdfData.metadata.CreationDate || null;

      if (!metadata.dimensions) {
        try {
          const firstPage = await pdfData.getPage(1);
          metadata.dimensions = {
            width: firstPage.width,
            height: firstPage.height,
          };
        } catch (err) {
          console.error('Error extracting dimensions from PDF:', err);
        }
      }
    } else {
      throw new Error(`Unsupported file type: ${fileExtension}`);
    }

    return metadata;
  } catch (err) {
    console.error('Error extracting metadata:', err);
    throw err;
  }
};

export default extractMetadata;
 */
