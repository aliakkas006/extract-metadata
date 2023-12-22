import tesseract from 'tesseract.js';

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
