import { AuthRouter } from '../routes/authRoutes.js';
import { AuthController } from '../controllers/authController.js';
import { FindUserByEmailUseCase } from '../services/userUseCases/findUserByEmailUseCase.usecase.js';

import { BcryptHelper } from '../auth/bcrypt.js';
import { JwtHelper } from '../auth/jwt.js';
import { UserRepositoryMongoDB } from '../database/repositories/userRepository.js';

export function makeAuthFactory(router) {
    const userRepositoryMongoDB = new UserRepositoryMongoDB();
    const findUserByEmailUseCase = new FindUserByEmailUseCase(
        userRepositoryMongoDB,
    );
    const bcryptHelper = new BcryptHelper();
    const jwtHelper = new JwtHelper();
    const authController = new AuthController(
        findUserByEmailUseCase,
        bcryptHelper,
        jwtHelper,
    );
    const authRoute = new AuthRouter(authController, router);

    return authRoute;
}
