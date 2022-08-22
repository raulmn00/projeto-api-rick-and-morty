import { UserRepositoryMongoDB } from './database/repositories/userRepository.js';
import { CreateUserUseCase } from './services/userUseCases/createUser.usecase.js';
import { MongoDbConnection } from './database/mongo/connection/connect.js';
import { FindUserByIdUseCase } from './services/userUseCases/findUserById.usecase.js';
import { UpdateUserUseCase } from './services/userUseCases/updateUser.usecase.js';
import { DeleteUserUseCase } from './services/userUseCases/deleteUser.usecase.js';
import { CreateCharacterUseCase } from './services/charactersUseCases/createCharacter.usecase.js';
import { CharacterRepositoryMongoDB } from './database/repositories/characterRepository.js';
const userRepository = new UserRepositoryMongoDB();
const characterRepository = new CharacterRepositoryMongoDB();
const createUserUseCase = new CreateUserUseCase(userRepository);
const dataBase = new MongoDbConnection();

await dataBase.connectDb().catch((err) => {
    console.log(err);
});

/*
const newUser = await createUserUseCase.execute({
    name: 'Renan Vicente',
    password: 'renis@gmail.com',
    email: 'senhasegura',
    image: 'http://imagem.com',
});
*/
const findByIdUser = new FindUserByIdUseCase(userRepository);
const userFinded = await findByIdUser.execute(
    '4de67bc4-a6d5-4e17-9518-95291cd4f405',
);
console.log(userFinded.id);
const newCharacter = new CreateCharacterUseCase(characterRepository);

const createCharacter = await newCharacter.execute(
    {
        name: 'Personagem 2',
        image: 'http://imagem.com',
        userId: userFinded.id,
    },
    userFinded,
);

console.log(createCharacter);

//const findByIdUser = new FindUserByIdUseCase(repository);

//const updateUser = new UpdateUserUseCase(repository, findByIdUser);

/*const userUpdated = await updateUser.execute(
    { name: 'Raul Atualizado Denovo', email: 'meumelhoremail@gmail.com' },
    'f57601a7-648e-4bba-b9ba-1f7f3f357993',
);*/

//const deleteUser = new DeleteUserUseCase(repository);

/*const deletedUser = await deleteUser.execute(
    'f57601a7-648e-4bba-b9ba-1f7f3f357993',
);

console.log(deletedUser);
*/