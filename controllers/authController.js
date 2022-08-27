export class AuthController {
    constructor(findUserByEmailUseCase, bcryptHelper, jwtHelper) {
        this.findUserByEmail = findUserByEmailUseCase;
        this.bcryptHelper = bcryptHelper;
        this.jwtHelper = jwtHelper;
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await this.findUserByEmail.execute(email);
            const passwordIsValid = this.bcryptHelper.comparePassword(
                password,
                user.password,
            );
            if (!passwordIsValid) {
                throw new Error('Invalid password, try again.');
            }
            delete user.passowrd;
            const token = this.jwtHelper.generateToken(user);
            res.status(200).send({
                accessToken: token,
            });
        } catch (err) {
            console.log(err);
            res.status(401).send(err.message);
        }
    }
}
