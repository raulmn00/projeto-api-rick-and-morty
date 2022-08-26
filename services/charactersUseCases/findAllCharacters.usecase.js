export class FindAllCharactersUseCase {
    constructor(characterRepository) {
        this.repository = characterRepository;
    }
    async execute() {
        return await this.repository.findAll();
    }
}
