export class UserRoutes {
    constructor(controller, router) {
        this.userController = controller;
        this.router = router;
    }
    route() {
        this.router.get('/', (req, res) =>
            this.userController.findAll(req, res),
        );
        this.router.post('/create', (req, res) =>
            this.userController.createController(req, res),
        );
        this.router.patch('/update/:id', (req, res) =>
            this.userController.updateController(req, res),
        );
        this.router.delete('/delete/:id', (req, res) =>
            this.userController.deleteController(req, res),
        );
        this.router.get('/:id', (req, res) =>
            this.userController.findByIdController(req, res),
        );
        return this.router;
    }
}
