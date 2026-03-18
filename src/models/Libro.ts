import mongoose, { Document, Schema } from 'mongoose';

export interface ILibro {
    title: string;
    author: string;
    description: string;
    price: number;
    type: 'VENTA' | 'ALQUILER';
    owner: mongoose.Types.ObjectId | string;
    libreria?: mongoose.Types.ObjectId | string;
    IsDeleted?: boolean; // Campo para soft delete
}

export interface ILibroModel extends ILibro, Document { }

const LibroSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        author: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        type: { type: String, enum: ['VENTA', 'ALQUILER'], required: true },
        owner: { type: Schema.Types.ObjectId, required: true, ref: 'Usuario' },
        libreria: { type: Schema.Types.ObjectId, required: false, ref: 'Libreria' },
        IsDeleted: { type: Boolean, default: false } // Campo para soft delete
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model<ILibroModel>('Libro', LibroSchema);
