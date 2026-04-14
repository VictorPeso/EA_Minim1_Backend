import mongoose from 'mongoose';
import Faq, { IFaqModel, IFaq } from '../models/Faq';

const createFaq = async (data: Partial<IFaq>): Promise<IFaqModel> => {
    const faq = new Faq({
        _id: new mongoose.Types.ObjectId(),
        ...data
    });
    return await faq.save();
};

const getFaq = async (faqId: string): Promise<IFaqModel | null> => {
    return await Faq.findById(faqId).populate('user', 'nombre').populate('respuestas');
};

const getAllFaq = async (): Promise<IFaqModel[]> => {
    return await Faq.find().populate('user', 'nombre').populate('respuestas');
};

const getAllFaq_NOT_Deleted = async (): Promise<IFaqModel[]> => {
    return await Faq.find({ IsDeleted: false }).populate('user', 'nombre').populate('respuestas');
};

const updateFaq = async (faqId: string, data: Partial<IFaq>): Promise<IFaqModel | null> => {
    const faq = await Faq.findById(faqId);
    if (faq) {
        faq.set(data);
        return await faq.save();
    }
    return null;
};

const deleteFaq = async (faqId: string): Promise<IFaqModel | null> => {
    return await Faq.findByIdAndUpdate(faqId, { IsDeleted: true }, { new: true });
};

const permanentDeleteFaq = async (faqId: string): Promise<IFaqModel | null> => {
    return await Faq.findByIdAndDelete(faqId);
};

const restoreFaq = async (faqId: string): Promise<IFaqModel | null> => {
    return await Faq.findByIdAndUpdate(faqId, { IsDeleted: false }, { new: true });
};

export default { createFaq, getFaq, getAllFaq, getAllFaq_NOT_Deleted, updateFaq, deleteFaq, permanentDeleteFaq, restoreFaq };
