import mongoose from "mongoose";
import Libreria, {ILibreriaModel, ILibreria} from "../models/Libreria";

const createLibreria = async (data: Partial<ILibreria>): Promise<ILibreriaModel> => {
    const libreria = new Libreria({
        _id: new mongoose.Types.ObjectId(),
        ...data
    });
    return await libreria.save();
};

const getLibreria = async (libreriaId: string): Promise<ILibreriaModel | null> => {
    return await Libreria.findById(libreriaId);
};

const getAllLibrerias = async (): Promise<ILibreriaModel[]> => {
    return await Libreria.find();
};  
const updateLibreria = async (libreriaId: string, data: Partial<ILibreria>): Promise<ILibreriaModel | null> => {
    const libreria = await Libreria.findById(libreriaId);
    if (libreria) {
        libreria.set(data);
        return await libreria.save();
    }
    return null;
};

const deleteLibreria = async (libreriaId: string): Promise<ILibreriaModel | null> => {
    return await Libreria.findByIdAndUpdate(libreriaId, 
        { isDeleted: true }, 
        { new: true });
};

const restoreLibreria = async (libreriaId: string): Promise<ILibreriaModel | null> => {
    return await Libreria.findByIdAndUpdate(libreriaId, 
        { isDeleted: false }, 
        { new: true });
};

export default { createLibreria, getLibreria, getAllLibrerias, updateLibreria, deleteLibreria, restoreLibreria };