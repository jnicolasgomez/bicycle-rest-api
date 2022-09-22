import {Schema, Types, model, Model} from 'mongoose';
import { Bicycle } from '../interfaces/bicycle.interface';
import { Coordinate } from '../types/types';

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
        coordinates: {
            type: [Number, Number],
            required: true
        },
        brand: {
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