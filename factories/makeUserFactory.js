import { UserRepositoryMongoDB } from '../database/repositories/userRepository.js';
import { CreateUserUseCase } from '../services/userUseCases/createUser.usecase.js';
import { UpdateUserUseCase } from '../services/userUseCases/updateUser.usecase.js';
import { FindUserByIdUseCase } from '../services/userUseCases/findUserById.usecase.js';
import { FindAllUsersUseCase } from '../services/userUseCases/findAllUsers.usecase.js';
import { DeleteUserUseCase } from '../services/userUseCases/deleteUser.usecase.js';
import { Services } from '../services/service.js';
import { UserRoutes } from '../routes/userRoutes.js';
import { Controller } from '../controllers/controller.js';

export function makeUserFactory(router) {
    const userRepository = new UserRepositoryMongoDB();

    const createUserUseCase = new CreateUserUseCase(userRepository);
    const findByIdUserUseCase = new FindUserByIdUseCase(userRepository);
    const updateUserUseCase = new UpdateUserUseCase(
        userRepository,
        findByIdUserUseCase,
    );
    const findAllUserUseCase = new FindAllUsersUseCase(userRepository);
    const deleteUserUseCase = new DeleteUserUseCase(userRepository);

    const userService = new Services(
        createUserUseCase,
        updateUserUseCase,
        deleteUserUseCase,
        findByIdUserUseCase,
        findAllUserUseCase,
    );

    const userController = new Controller(userService);

    const userRoutes = new UserRoutes(userController, router);

    return userRoutes;
}
