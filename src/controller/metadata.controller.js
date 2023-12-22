import extractMetadata from '../utils/extractMetadata.js';

const metadataController = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded!' });
  }

  const filePath = req.file.path;

  try {
    const metadata = await extractMetadata(filePath);

    const response = {
      code: 201,
      message: 'File uploaded and metadata stored successfully',
      metadata,
    };

    res.status(201).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error storing metadata' });
  }
};

export default metadataController;
