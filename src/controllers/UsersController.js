// COntrollers de usuários e o crud de usuários também que vai ter, Listagem, a visualização de 1, Atualização, e a remoção.

import User from '../models/User';

import { createPasswordHash } from '../services/auth';

class UsersController {
   //Listagem
   async index(req, res) {
      // try catch é meio que um if do erro, caso ele tente fazer alguma coisa e der uma erro vai me retornar o erro ou seja o catch
      try {
         // o método find() sem alguma parâmetro entre parenteses, vai listar todos os usuários daquela coleção
         const users = await User.find();
         return res.json(users);
      } catch(err) {
         console.error(err);
         return res.sttus(500).json({error: "Internal server error."})
      }
   }

   async show(req, res) {

   }

   async create(req, res) {
      try {
         const { email, password } = req.body;

         const user = await User.findOne({email});
         // nesse if é para verificar se já tem um e-mail cadastro igual, caso tenha vai me retorna o erro
         if(user) {
            return res
            .status(422)
            .json({message: `User ${email} already exists.`})
         }

         //criptografando o password
         const encryptedPassword = await createPasswordHash(password);

         const newUser = await User.create({
            email, 
            password: encryptedPassword
         })

         return res.status(201).json(newUser)

      } catch(err) {
         console.error(err);
         return res.status(500).json({error: "Internal server error."})
      }
   }

   async update(req, res) {

   }

   async destroy(req, res) {

   }
}

export default new UsersController();