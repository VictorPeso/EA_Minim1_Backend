import { NextFunction, Request, Response } from 'express';
import FaqService from '../services/Faq';

const createFaq = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const savedFaq = await FaqService.createFaq(req.body);
        return res.status(201).json(savedFaq);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const getFaq = async (req: Request, res: Response, next: NextFunction) => {
    const faqId = req.params.faqId;
    try {
        const faq = await FaqService.getFaq(faqId);
        return faq ? res.status(200).json(faq) : res.status(404).json({ message: 'not found' });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const getAllFaq = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const faqs = await FaqService.getAllFaq();
        return res.status(200).json(faqs);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const getAllFaq_NOT_Deleted = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const faqs = await FaqService.getAllFaq_NOT_Deleted();
        return res.status(200).json(faqs);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const updateFaq = async (req: Request, res: Response, next: NextFunction) => {
    const faqId = req.params.faqId;
    try {
        const updatedFaq = await FaqService.updateFaq(faqId, req.body);
        return updatedFaq ? res.status(200).json(updatedFaq) : res.status(404).json({ message: 'not found' });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const deleteFaq = async (req: Request, res: Response, next: NextFunction) => {
    const faqId = req.params.faqId;
    try {
        const faq = await FaqService.deleteFaq(faqId);
        return faq ? res.status(200).json(faq) : res.status(404).json({ message: 'not found' });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const permanentDeleteFaq = async (req: Request, res: Response, next: NextFunction) => {
    const faqId = req.params.faqId;
    try {
        const faq = await FaqService.permanentDeleteFaq(faqId);
        return faq ? res.status(204).json({ message: 'deleted permanent' }) : res.status(404).json({ message: 'not found' });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const restoreFaq = async (req: Request, res: Response, next: NextFunction) => {
    const faqId = req.params.faqId;
    try {
        const faq = await FaqService.restoreFaq(faqId);
        return faq ? res.status(200).json(faq) : res.status(404).json({ message: 'not found' });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export default { createFaq, getFaq, getAllFaq, getAllFaq_NOT_Deleted, updateFaq, deleteFaq, permanentDeleteFaq, restoreFaq };
