export class Services {
    constructor(
        createUseCase,
        updateUseCase,
        deleteUseCase,
        findByIdUseCase,
        findAllUseCase,
    ) {
        this.createUseCase = createUseCase;
        this.updateUseCase = updateUseCase;
        this.deleteUseCase = deleteUseCase;
        this.findAllUseCase = findAllUseCase;
        this.findByIdUseCase = findByIdUseCase;
    }
    async createService(data) {
        return await this.createUseCase.execute(data);
    }

    async updateService(data, id) {
        return await this.updateUseCase.execute(data, id);
    }
    async deleteService(data) {
        return await this.deleteUseCase.execute(data);
    }
    async findByIdService(id) {
        return await this.findByIdUseCase.execute(id);
    }
    async findAllService() {
        return await this.findAllUseCase.execute();
    }
}
