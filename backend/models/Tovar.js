import mongoose from 'mongoose';

const TovarSchema = new mongoose.Schema({
	title: { type: String, required: true },
	desc: { type: String, required: true },
	category: { type: String, required: true },
	imgSrc: { type: String, required: true },
	price: { type: Number, required: true },
	available: { type: String, required: true },
}, { timestamps: true });

export const Tovar = mongoose.model('Tovar', TovarSchema)
