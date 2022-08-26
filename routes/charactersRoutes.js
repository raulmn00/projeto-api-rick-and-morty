export class CharacterRoutes {
    constructor(controller, router) {
        this.characterController = controller;
        this.router = router;
    }
    route() {
        router.get('/', this.characterController.findAll);
        router.post('/create', this.characterController.createService);
        router.patch('/update/:id', this.characterController.updateService);
        router.delete('/delete/:id', this.characterController.deleteService);
        router.get('/find/:id', this.characterController.findById);
        router.get('/search', this.characterController.findCharacterByName);
    }
}
