export class EquipmentsRepository {
    constructor() {
        this.equipments = [];
    }
    async create(equipments) {
        this.equipments.push(equipments);
        return await equipments;
    }
}
