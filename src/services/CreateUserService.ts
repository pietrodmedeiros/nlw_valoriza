import { UsersRepositories } from "../repositories/UsersRepositories"
import {getCustomRepository} from "typeorm"
interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean 
}


class CreateUserService {
    
    async execute({name, email, admin} : IUserRequest) {

        const usersRepository = getCustomRepository(UsersRepositories);

        if(!email) {
            throw new Error("Email incorrect!")
        }

        const UserAlreadyExists = await usersRepository.findOne({ 
            email
        })

        if (UserAlreadyExists) {
            throw new Error("User already exists!")
        }

        const user = usersRepository.create({
            name, 
            email,
            admin
        })
        await usersRepository.save(user)

        return user
    }
    
}


export { CreateUserService }