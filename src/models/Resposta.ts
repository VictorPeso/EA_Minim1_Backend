import mongoose, { Document, Schema } from 'mongoose';

export interface IResposta {
    user: mongoose.Types.ObjectId;
    respuesta: string;
    IsDeleted?: boolean;
}

export interface IRespostaModel extends IResposta, Document {}

const RespostaSchema: Schema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, required: true, ref: 'Usuario' },
        respuesta: { type: String, required: true },
        IsDeleted: { type: Boolean, default: false }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model<IRespostaModel>('Resposta', RespostaSchema);
