import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	username: { type: String, required: true },
	password: { type: String, required: true },
	name: { type: String},
	surname: { type: String },
	age: { type: Number},
	role: [{ type: String}]
}, { timestamps: true });

export const User = mongoose.model('User', UserSchema)
