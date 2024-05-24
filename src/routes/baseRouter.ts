import express from 'express';
import BaseController  from '../controllers/baseController';
const router = express.Router();


router.get('/', BaseController.testar);

export default router;