import express from 'express';
import controller from '../controllers/Faq';
import { Schemas, ValidateJoi } from '../middleware/Joi';

const router = express.Router();

router.post('/', ValidateJoi(Schemas.faq.create), controller.createFaq);

router.get('/all', controller.getAllFaq);

router.get('/:faqId', controller.getFaq);

router.get('/', controller.getAllFaq_NOT_Deleted);

router.put('/:faqId', ValidateJoi(Schemas.faq.update), controller.updateFaq);

router.delete('/:faqId', controller.deleteFaq);

router.delete('/permanent/:faqId', controller.permanentDeleteFaq);

router.put('/restore/:faqId', controller.restoreFaq);

export default router;
