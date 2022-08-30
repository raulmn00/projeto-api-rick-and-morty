import { JwtHelper } from '../auth/jwt.js';
import { UserRepositoryMongoDB } from '../database/repositories/userRepository.js';
import { FindUserByIdUseCase } from '../services/userUseCases/findUserById.usecase.js';

export async function authMiddleware(req, res, next) {
    const token = req.headers.authorization;
    try {
        const jwtHelper = new JwtHelper();
        const userData = jwtHelper.verifyToken(token.slice(7));

        const userRepository = new UserRepositoryMongoDB();
        const findUserById = new FindUserByIdUseCase(userRepository);
        await findUserById.execute(userData.data.id);
        next();
    } catch (err) {
        res.status(401).send('Authentication is failed, token is invalid.');
    }
}
