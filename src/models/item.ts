import {Schema, Types, model, Model} from 'mongoose';
import { Bicycle } from '../interfaces/bicycle.interface';

const BicycleSchema = new Schema<Bicycle>(
    {
        color: {
            type: String,
            required: true
        },
        model: {
            type: String,
            required: true
        },
        ubication: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const BicycleModel = model("bicycles", BicycleSchema);
export default BicycleModel;