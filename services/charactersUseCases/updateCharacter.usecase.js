import { CharacterEntity } from '../../entities/Character.entity.js';

export class UpdateCharacterUseCase {
    constructor(userRepository, FindCharacterByIdUseCase, userIdCharacter) {
        this.repository = userRepository;
        this.FindCharacterByIdUseCase = FindCharacterByIdUseCase;
        this.userId = userIdCharacter;
    }

    async execute(characterUpdated, characterId) {
        //Encontra o user por ID e o retorna, senão encontra retorna undefined.
        const characterToUpdate = await this.FindCharacterByIdUseCase.execute(
            characterId,
        );

        //se userToUpdate for undefined, dispara um novo erro.
        if (!characterToUpdate) {
            throw new Error(
                `User id: ${userId} to update not pertence a user.`,
            );
        }
        //Pega os valores antigos do usuario encontrado e substitui os valores novos que recebemos como parametro (userUpdate)
        const characterModified = Object.assign(
            characterToUpdate,
            characterUpdated,
        );

        //Usamos a entidade para pegar as informações do usuario atualizado para poder validar
        const characterValidated = new CharacterEntity(
            characterModified,
            this.userId,
        );

        //se as novas propriedades nao forem validas a entidade ira disparar um erro
        characterValidated.validate();

        //vai passar os dados do usuario que virão da entidade para o repository
        return await this.repository.updateCharacter(
            characterValidated.getCharacter(),
        );
    }
}
