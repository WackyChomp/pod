import express from 'express';
import { createRental, deleteRental, getAllRentals, getRentalDetail, updateRental } from '../controllers/rental.controller.js';

const router = express.Router();

router.route('/').get(getAllRentals);
router.route('/').post(createRental);
router.route('/:id').get(getRentalDetail);
router.route('/:id').patch(updateRental);
router.route('/:id').delete(deleteRental);

export default router;