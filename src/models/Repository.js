import mongoose from 'mongoose';

//criandos os schema, meio que é tabela do banco de dados
const repositorySchema = new mongoose.Schema(
   {//nesse campo e-mail meio que é para não deixar repetir o meu e-mail
      name: {
         type: String,
         required: true,
      },
      url: {
         type: String,
         required: true,
         unique: true,
      },
      userId: {
         type: String,
         required: true
      }
   },
   {//esse timestamps vai colocar a data de criação e de registo automaticamente
      timestamps: true
   }
)

export default mongoose.model('Repository', repositorySchema);