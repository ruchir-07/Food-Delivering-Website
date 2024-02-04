'use client';

import bcrypt from 'bcrypt';
import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { 
        type: String, 
        required: true, 
        validate: password => {
            if (!password?.length || password.length < 5 ) {
                new Error('Password must be at least 5 characters');
            }
        },
    },
}, {timestamps: true});

UserSchema.post('validate', function(user) {
    const notHashedPassword = user.password;
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    user.password = bcrypt.hashSync(notHashedPassword, salt);    
})

export const User = models?.User || model('User', UserSchema) 
// module.exports = mongoose.models?.User || mongoose.model('User', UserSchema);