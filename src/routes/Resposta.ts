import express from 'express';
import controller from '../controllers/Resposta';
import { Schemas, ValidateJoi } from '../middleware/Joi';

const router = express.Router();

router.post('/', ValidateJoi(Schemas.resposta.create), controller.createResposta);

router.get('/all', controller.getAllRespostas);

router.get('/:respostaId', controller.getResposta);

router.get('/', controller.getAllRespostas_NOT_Deleted);

router.put('/:respostaId', ValidateJoi(Schemas.resposta.update), controller.updateResposta);

router.delete('/:respostaId', controller.deleteResposta);

router.delete('/permanent/:respostaId', controller.permanentDeleteResposta);

router.put('/restore/:respostaId', controller.restoreResposta);

export default router;
