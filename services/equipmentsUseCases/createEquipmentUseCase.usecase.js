import { Equipments } from '../../entities/Equipments';

export class CreateEquipmentsUseCase {
    constructor(equipmentRepository) {
        this.equipmentRepository = equipmentRepository;
    }
    async execute(set) {
        const newEquipment = new Equipments(set);
        newEquipment.validate();

        return await this.equipmentRepository.create(
            newEquipment.getEquipments(),
        );
    }
}
