import { CharacterRepositoryMongoDB } from './database/repositories/characterRepository.js';
import { UserRepositoryMongoDB } from './database/repositories/userRepository.js';
import { MongoDbConnection } from './database/mongo/connection/connect.js';
import { CreateUserUseCase } from './services/userUseCases/createUser.usecase.js';
import { UpdateUserUseCase } from './services/userUseCases/updateUser.usecase.js';
import { FindUserByIdUseCase } from './services/userUseCases/findUserById.usecase.js';
import { FindAllUsersUseCase } from './services/userUseCases/findAllUsers.usecase.js';
import { DeleteUserUseCase } from './services/userUseCases/deleteUser.usecase.js';
import { Services } from './services/service.js';
import { Controller } from './controllers/controller.js';
import { UserEntity } from './entities/User.entity.js';

const connectionDb = new MongoDbConnection();
await connectionDb.connectDb();

const characterRepository = new CharacterRepositoryMongoDB();
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

/*
const newUser = await userController.createService({
    body: {
        name: 'Novo Usuário',
        email: 'emailnovo@gmail.com',
        password: 'senhanova',
        image: 'https://novaimagem.com',
    },
});


console.log(newUser); */

/*
const deleteUser = await userController.deleteService({
    params: {
        id: '744e7338-d99b-43c7-bdd1-0ec7a0f901c8',
    },
});
console.log(deleteUser);*/

/*
const updateUser = await userController.updateService({
    body: { name: 'Raul', email: 'raul@gmail.com' },
    params: {
        id: '744e7338-d99b-43c7-bdd1-0ec7a0f901c8',
    },
});
console.log(updateUser);
*/
