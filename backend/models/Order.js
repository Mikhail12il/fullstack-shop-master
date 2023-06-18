import mongoose from 'mongoose';
import { Schema } from 'mongoose';


const OrderSchema = new mongoose.Schema({
	status: { type: String, required: true },
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
	,
	price: { type: Number, required: true },
	tovars: [{
		type: Schema.Types.ObjectId,
		ref: 'Tovar'
	}],
}, { timestamps: true });

OrderSchema.virtual('virtualTovars', {
	ref: 'Tovar',
	localField: 'tovars',
	foreignField: '_id',
});

OrderSchema.virtual('virtualUser', {
	ref: 'User',
	localField: 'userId',
	foreignField: '_id',
});

OrderSchema.set('toObject', { virtuals: true });
OrderSchema.set('toJSON', { virtuals: true });

export const Order = mongoose.model('Order', OrderSchema)
