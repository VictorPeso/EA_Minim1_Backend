import { NextFunction, Request, Response } from 'express';
import RespostaService from '../services/Resposta';

const createResposta = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const savedResposta = await RespostaService.createResposta(req.body);
        return res.status(201).json(savedResposta);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const getResposta = async (req: Request, res: Response, next: NextFunction) => {
    const respostaId = req.params.respostaId;
    try {
        const resposta = await RespostaService.getResposta(respostaId);
        return resposta ? res.status(200).json(resposta) : res.status(404).json({ message: 'not found' });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const getAllRespostas = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const respostas = await RespostaService.getAllRespostas();
        return res.status(200).json(respostas);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const getAllRespostas_NOT_Deleted = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const respostas = await RespostaService.getAllRespostas_NOT_Deleted();
        return res.status(200).json(respostas);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const updateResposta = async (req: Request, res: Response, next: NextFunction) => {
    const respostaId = req.params.respostaId;
    try {
        const updatedResposta = await RespostaService.updateResposta(respostaId, req.body);
        return updatedResposta ? res.status(200).json(updatedResposta) : res.status(404).json({ message: 'not found' });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const deleteResposta = async (req: Request, res: Response, next: NextFunction) => {
    const respostaId = req.params.respostaId;
    try {
        const resposta = await RespostaService.deleteResposta(respostaId);
        return resposta ? res.status(200).json(resposta) : res.status(404).json({ message: 'not found' });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const permanentDeleteResposta = async (req: Request, res: Response, next: NextFunction) => {
    const respostaId = req.params.respostaId;
    try {
        const resposta = await RespostaService.permanentDeleteResposta(respostaId);
        return resposta ? res.status(204).json({ message: 'deleted permanent' }) : res.status(404).json({ message: 'not found' });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const restoreResposta = async (req: Request, res: Response, next: NextFunction) => {
    const respostaId = req.params.respostaId;
    try {
        const resposta = await RespostaService.restoreResposta(respostaId);
        return resposta ? res.status(200).json(resposta) : res.status(404).json({ message: 'not found' });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export default { createResposta, getResposta, getAllRespostas, getAllRespostas_NOT_Deleted, updateResposta, deleteResposta, permanentDeleteResposta, restoreResposta };
