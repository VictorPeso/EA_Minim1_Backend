import mongoose from "mongoose";
import Libro, { ILibroModel, ILibro } from "../models/Libro";

const createLibro = async (data: Partial<ILibro>): Promise<ILibroModel> => {
    const libro = new Libro({
        _id: new mongoose.Types.ObjectId(),
        ...data
    });
    return await libro.save();
};

const getLibro = async (libroId: string): Promise<ILibroModel | null> => {
    return await Libro.findById(libroId);
};  

const getAllLibros = async (): Promise<ILibroModel[]> => {
    return await Libro.find();
};

const updateLibro = async (libroId: string, data: Partial<ILibro>): Promise<ILibroModel | null> => {
    const libro = await Libro.findById(libroId);
    if (libro) {
        libro.set(data);
        return await libro.save();
    }
    return null;
};  

const deleteLibro = async (libroId: string): Promise<ILibroModel | null> => {
    return await Libro.findByIdAndUpdate(libroId, 
        { IsDeleted: true }, 
        { new: true }); // Soft delete by setting IsDeleted to true
};

const restoreLibro = async (libroId: string): Promise<ILibroModel | null> => {
    return await Libro.findByIdAndUpdate(libroId, 
        { IsDeleted: false }, 
        { new: true }); // Restore by setting IsDeleted to false
};

export default { createLibro, getLibro, getAllLibros, updateLibro, deleteLibro, restoreLibro };