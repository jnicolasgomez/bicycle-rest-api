import { Bicycle } from "../interfaces/bicycle.interface";
import BicycleModel from "../models/item"

const insertBicycle = async (item:Bicycle) => {
    const response = await BicycleModel.create(item);
    return response;
}

const getBicycles = async () => {
    const response = await BicycleModel.find({});
    return response;
}

const getBicycleById = async (id: string) => {
    const response = await BicycleModel.findById(id);
    return response;
}

const updateBicycle = async (id: string, bicycle: Bicycle) => {
    const response = await BicycleModel.findOneAndUpdate(
        {_id: id},
        bicycle,
        {
            new: true
        }
        );
    return response;
}

const deleteBicycleById = async (id: string) => {
    const response = await BicycleModel.deleteOne({_id: id});
    return response;
}

const deleteAll = async () => {
    return await BicycleModel.deleteMany({});
}

export {insertBicycle, getBicycles, getBicycleById, updateBicycle, deleteBicycleById, deleteAll};