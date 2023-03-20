import Rental from '../mongodb/models/rental.js';
import User from '../mongodb/models/user.js';

import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

dotenv.config();

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getAllRentals = async(req,res) => {}
const getRentalDetail = async(req,res) => {}


const createRental = async(req,res) => {
	const { title, description, rentalType, location, price, photo, email } = req.body;      // destructured from server rental.js , req.body is how back/front end speak

	// Start new session
	const session = await mongoose.startSession();			// make sure the creation of rental is atomic transaction , ensure it works/not work
	session.startTransaction();

	const user = await user.findOne({ email }).session(session);			// get user's email

	if(!user) throw new Error('User not found -_- | :O');

	const photoUrl = await cloudinary.uploader.upload(photo);				// Cloudinary

	const newRental = await Rental.create({
		title,
		description,
		rentalType,
		location,
		price,
		photo: photoUrl.url,
		creator: user._id
	});

	user.allRental.push(newRental._id);				// updates the user and makes sure id is connected

	await user.save({ session });
	
	await session.commitTransaction();				// done with transaction and ready to move on

	res.status(200).json({ message: 'Rental has been successfully created!' });
}


const updateRental = async(req,res) => {}
const deleteRental = async(req,res) => {}

export {
	getAllRentals,
	getRentalDetail,
	createRental,
	updateRental,
	deleteRental,
}