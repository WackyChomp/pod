import mongoose from 'mongoose';

const RentalSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: { type: String , required: true},
    rentalType: { type: String , required: true},
    location: { type: String , required: true},
    price: { type: Number , required: true},
    photo: { type: String , required: true},
    creator: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],

})

const rentalModel = mongoose.model('Rental', RentalSchema);

export default rentalModel;