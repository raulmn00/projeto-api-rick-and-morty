import * as bcrypt from 'bcrypt';

export class BcryptHelper {
    hashGenerator(password) {
        const hashedPassword = bcrypt.hashSync(password, 10, (erro, hash) => {
            if (erro) {
                console.log(erro);
                throw new Error('Error in hash');
            } else {
                console.log(hash);
                return hash;
            }
        });
        return hashedPassword;
    }
    comparePassword(password, hash) {
        return bcrypt.compareSync(password, hash);
    }
}
