import mongoose from 'mongoose';
import Resposta, { IRespostaModel, IResposta } from '../models/Resposta';
import { IFaqModel } from '../models/Faq';

const createResposta = async (data: Partial<IResposta>): Promise<IRespostaModel> => {
    const resposta = new Resposta({
        _id: new mongoose.Types.ObjectId(),
        ...data
    });
    return await resposta.save();
};

const getResposta = async (respostaId: string): Promise<IRespostaModel | null> => {
    return await Resposta.findById(respostaId).populate('user', 'nombre');
};

const getAllRespostas = async (): Promise<IRespostaModel[]> => {
    return await Resposta.find().populate('user', 'nombre');
};

const getAllRespostas_NOT_Deleted = async (): Promise<IRespostaModel[]> => {
    return await Resposta.find({ IsDeleted: false }).populate('user', 'nombre');
};

const updateResposta = async (respostaId: string, data: Partial<IResposta>): Promise<IRespostaModel | null> => {
    const resposta = await Resposta.findById(respostaId);
    if (resposta) {
        resposta.set(data);
        return await resposta.save();
    }
    return null;
};

const deleteResposta = async (respostaId: string): Promise<IRespostaModel | null> => {
    return await Resposta.findByIdAndUpdate(respostaId, { IsDeleted: true }, { new: true });
};

const permanentDeleteResposta = async (respostaId: string): Promise<IRespostaModel | null> => {
    return await Resposta.findByIdAndDelete(respostaId);
};

const restoreResposta = async (respostaId: string): Promise<IRespostaModel | null> => {
    return await Resposta.findByIdAndUpdate(respostaId, { IsDeleted: false }, { new: true });
};

export default { createResposta, getResposta, getAllRespostas, getAllRespostas_NOT_Deleted, updateResposta, deleteResposta, permanentDeleteResposta, restoreResposta };
