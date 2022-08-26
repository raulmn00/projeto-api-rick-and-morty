export class AuthController {
    constructor(findUserByEmailUseCase, bcryptHelper, jwtHelper) {
        this.findUserByEmailUseCase = findUserByEmailUseCase;
        this.bcryptHelper = bcryptHelper;
        this.jwtHelper = jwtHelper;
    }

    async login(req, res) {
        try {
            const { email, passowrd } = req.body;
            const user = await this.findUserByEmail.execute(email);
            const passwordIsValid = this.bcryptHelper.comparePassword(
                passowrd,
                user.passowrd,
            );
            if (!passwordIsValid) {
                throw new Error('Invalid Passowrd, try again.');
            }
            delete user.passowrd;
            const token = this.jwtHelper.generateToken(user);
            res.status(200).send({
                accessToken: token,
            });
        } catch (err) {
            console.log(err);
            res.status().send(err.message);
        }
    }
}
