import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { iTokenPayload } from '../interfaces/token.js';

dotenv.config();

export const encrypt = async (source: string, salt = 10) => {
    if (source) {
        return await bcrypt.hash(source, salt);
    } else return;
};

export const compare = async (value: string, hash: string) => {
    return await bcrypt.compare(value, hash);
};

export const createToken = (tokenPayLoad: iTokenPayload) => {
    return jwt.sign(tokenPayLoad, process.env.SECRET as string);
};

export const verifyToken = (token: string) => {
    return jwt.verify(token, process.env.SECRET as string);
};
