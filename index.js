import { UserRepositoryMongoDB } from './database/repositories/userRepository.js';
import { CreateUserUseCase } from './services/usecases/createUser.usecase.js';

const repository = new UserRepositoryMongoDB();
const createUserUseCase = new CreateUserUseCase(repository);

const newUser = await createUserUseCase.execute({
    name: 'Raul',
    userEmail: 'raul@gmail.com',
    userPassword: 'teste123',
    userImage: 'http://imagem.com',
});

console.log(newUser);
