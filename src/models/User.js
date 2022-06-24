import mongoose from 'mongoose';

//criandos os schema, meio que é tabela do banco de dados
const userSchema = new mongoose.Schema(
   {//nesse campo e-mail meio que é para não deixar repetir o meu e-mail
      email: {
         type: String,
         required: true,
         index: {
            unique: true,
         }
      },
      password: {
         type: String,
         required: true
      }
   },
   {//esse timestamps vai colocar a data de criação e de registo automaticamente
      timestamps: true
   }
)

export default mongoose.model('User', userSchema);