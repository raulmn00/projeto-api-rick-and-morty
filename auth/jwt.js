import jwt from 'jsonwebtoken';
//import { config } from 'dotenv';
/*if (process.env.NODE_ENV !== 'production') {
    config();
}*/

export class JwtHelper {
    generateToken(data) {
        const token = jwt.sign({ data }, process.env.SECRET_PASSWORD, {
            expiresIn: '4h',
        });
        return token;
    }

    verifyToken(token) {
        const data = jwt.verify(token, process.env.SECRET_PASSWORD);
        return data;
    }
}
