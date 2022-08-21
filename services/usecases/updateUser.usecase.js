import { UserEntity } from '../../entities/User.entity';

export class updateUserUseCase {
    constructor(userRepository, findUserByIdUseCase) {
        this.repository = userRepository;
        this.findUserByIdUseCase = findUserByIdUseCase;
    }

    async execute(userUpdated, userId) {
        //Encontra o user por ID e o retorna, senão encontra retorna undefined.
        const userToUpdate = await this.findUserByIdUseCase(userId);

        //se userToUpdate for undefined, dispara um novo erro.
        if (!userToUpdate) {
            throw new Error(
                `User id: ${userId} to update not pertence a user.`,
            );
        }

        //Pega os valores antigos do usuario encontrado e substitui os valores novos que recebemos como parametro (userUpdate)
        const userModified = { ...userToUpdate, userUpdated };

        //Usamos a entidade para pegar as informações do usuario atualizado para poder validar
        const userValidated = new UserEntity(userModified);

        //se as novas propriedades nao forem validas a entidade ira disparar um erro
        userValidated.validate();

        //vai passar os dados do usuario que virão da entidade para o repository
        return await this.repository.updateUser(userValidated.getUser());
    }
}
