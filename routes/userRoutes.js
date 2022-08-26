export class UserRoutes {
    constructor(controller, router) {
        this.userController = controller;
        this.router = router;
    }
    route() {
        router.get('/', this.userController.findAll);
        router.post('/create', this.userController.createService);
        router.patch('/update/:id', this.userController.updateService);
        router.delete('/delete/:id', this.userController.deleteService);
        router.get('/:id', this.userController.findById);
    }
}
