import { Request, Response, Router } from "express";
import { deleteBicycle, getBicycle, getAllBicycles, postBicycle, putBicycle, deleteAllBicycles } from "../controllers/bicycle.controller";
import { checkJwt } from "../middleware/session";

const router = Router();

router.get('/', checkJwt, getAllBicycles);
router.get('/:id', checkJwt, getBicycle);
router.post('/', checkJwt, postBicycle);
router.put('/:id', checkJwt, putBicycle);
router.delete('/:id', checkJwt, deleteBicycle);
router.delete('/', checkJwt, deleteAllBicycles);

export{ router }