import { Request, Response } from "express";
import morgan from "morgan";
import { insertBicycle, getBicycles, getBicycleById, updateBicycle, deleteBicycleById, deleteAll } from "../services/bicycle.service";
import { handleHttp } from "../utils/error.handle";

const getBicycle = async ({params}: Request, res: Response) => {
    try {
        const {id} = params;
        const response = await getBicycleById(id);
        res.send(response);
    } catch (e) {
        handleHttp(res,"ERROR_GET_ITEM", e);
    }
}

const getAllBicycles = async (req: Request, res: Response) => {
    try {
        const response = await getBicycles();
        res.send(response);
    } catch (e) {
        handleHttp(res,"ERROR_GET_ITEMS", e);
    }
}

const putBicycle = async ({params, body}: Request, res: Response) => {
    try {
        const {id} = params;
        const response = await updateBicycle(id, body);
        res.send(response);
    } catch (e) {
        handleHttp(res,"ERROR_UPDATE_ITEM", e);
    }
}

const postBicycle = async ({body}: Request, res: Response) => {
    try {
        console.log(body);
        const response = await insertBicycle(body);
        res.send(response);
    } catch (e) {
        handleHttp(res,"ERROR_POST_ITEM",e);
    }
}

const deleteBicycle = async ({params}: Request, res: Response) => {
    try {
        const {id} = params;
        const response = await deleteBicycleById(id);
        res.send(response);
    } catch (e) {
        handleHttp(res,"ERROR_DELETE_ITEM", e);
    }
}

const deleteAllBicycles = async ({params}: Request, res: Response) => {
    try {
        const {id} = params;
        const response = await deleteAll();
        res.send(response);
    } catch (e) {
        handleHttp(res,"ERROR_DELETE_ITEM", e);
    }
}


export {getBicycle, getAllBicycles, putBicycle, postBicycle, deleteBicycle, deleteAllBicycles}