import mongoose, { Document, Schema } from 'mongoose';

export interface IEvento {
    title: string;
    description: string;
    date: Date;
    libreria: mongoose.Types.ObjectId | string;
    IsDeleted?: boolean; // Campo para soft delete
}

export interface IEventoModel extends IEvento, Document { }

const EventoSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        date: { type: Date, required: true },
        libreria: { type: Schema.Types.ObjectId, required: true, ref: 'Libreria' },
        IsDeleted: { type: Boolean, default: false } // Campo para soft delete
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model<IEventoModel>('Evento', EventoSchema);
