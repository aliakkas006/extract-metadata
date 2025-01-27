import { Router } from 'express';
import upload from '../utils/upload.js';
import metadataController from '../controller/metadata.controller.js';

const router = Router();

router.post('/', upload.single('file'), metadataController);

export default router;
