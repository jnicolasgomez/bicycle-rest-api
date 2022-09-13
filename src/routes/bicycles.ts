import { Request, Response, Router } from "express";
import { deleteBicycle, getBicycle, getAllBicycles, postBicycle, putBicycle } from "../controllers/bicycle.controller";

const router = Router();

router.get('/', getAllBicycles);
router.get('/:id', getBicycle);
router.post('/', postBicycle);
router.put('/:id', putBicycle);
router.delete('/:id', deleteBicycle);

export{ router }