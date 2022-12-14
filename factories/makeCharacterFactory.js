import { CharacterRepositoryMongoDB } from '../database/repositories/characterRepository.js';
import { CreateCharacterUseCase } from '../services/charactersUseCases/createCharacter.usecase.js';
import { DeleteCharacterUseCase } from '../services/charactersUseCases/deleteCharacter.usecase.js';
import { FindAllCharactersUseCase } from '../services/charactersUseCases/findAllCharacters.usecase.js';
import { FindCharacterByIdUseCase } from '../services/charactersUseCases/findByIdCharacter.usecase.js';
import { FindCharacterByNameUseCase } from '../services/charactersUseCases/findCharacterByNameUseCase.usecase.js';
import { UpdateCharacterUseCase } from '../services/charactersUseCases/updateCharacter.usecase.js';
import { CharacterController } from '../controllers/characterController.js';
import { Services } from '../services/service.js';
import { CharacterRoutes } from '../routes/charactersRoutes.js';
import { FindUserByIdUseCase } from '../services/userUseCases/findUserById.usecase.js';
import { UserRepositoryMongoDB } from '../database/repositories/userRepository.js';

export function makeCharacterFactory(router) {
    const characterRepositoryMongoDB = new CharacterRepositoryMongoDB();
    const userRepositoryMongoDB = new UserRepositoryMongoDB();
    const findUserByIdUseCase = new FindUserByIdUseCase(userRepositoryMongoDB);

    const findCharacterByIdUseCase = new FindCharacterByIdUseCase(
        characterRepositoryMongoDB,
    );
    const createCharacterUseCase = new CreateCharacterUseCase(
        characterRepositoryMongoDB,
        findUserByIdUseCase,
    );
    const updateCharacterUseCase = new UpdateCharacterUseCase(
        characterRepositoryMongoDB,
        findCharacterByIdUseCase,
    );
    const findAllCharactersUseCase = new FindAllCharactersUseCase(
        characterRepositoryMongoDB,
    );
    const deleteCharacterUseCase = new DeleteCharacterUseCase(
        characterRepositoryMongoDB,
    );
    const findCharacterByNameUseCase = new FindCharacterByNameUseCase(
        characterRepositoryMongoDB,
    );

    const characterService = new Services(
        createCharacterUseCase,
        updateCharacterUseCase,
        deleteCharacterUseCase,
        findCharacterByIdUseCase,
        findAllCharactersUseCase,
    );
    const characterController = new CharacterController(
        characterService,
        findCharacterByNameUseCase,
    );

    const characterRoutes = new CharacterRoutes(characterController, router);

    return characterRoutes;
}
