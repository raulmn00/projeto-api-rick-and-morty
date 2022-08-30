import { EquipmentsRepository } from '../database/repositories/equipmentRepository.js';
import { CreateEquipmentsUseCase } from '../services/equipmentsUseCases/createEquipmentUseCase.usecase.js';
import { EquipmentsController } from '../controllers/equipmentsController.js';
import { EquipmentRoutes } from '../routes/equipmentRoutes.js';

export function makeEquipmentsFactory(router) {
    const equipmentRepository = new EquipmentsRepository();
    const createEquipment = new CreateEquipmentsUseCase(equipmentRepository);
    const equipmentController = new EquipmentsController(createEquipment);
    const equipmentRoutes = new EquipmentRoutes(equipmentController, router);

    return equipmentRoutes;
}
