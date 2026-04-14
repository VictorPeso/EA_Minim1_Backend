import mongoose, { Document, Schema } from 'mongoose';

export interface IFaq {
    user: mongoose.Types.ObjectId;
    pregunta: string;
    respuestas: mongoose.Types.ObjectId[];
    IsDeleted?: boolean;
}

export interface IFaqModel extends IFaq, Document {}

const FaqSchema: Schema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, required: true, ref: 'Usuario' },
        pregunta: { type: String, required: true },
        respuestas: [{ type: Schema.Types.ObjectId, required: true, ref: 'Resposta' }],
        IsDeleted: { type: Boolean, default: false }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model<IFaqModel>('Faq', FaqSchema);
