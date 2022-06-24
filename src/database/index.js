// aqui é o arquivo que vai fazer a conexão com o mongoose
import mongoose from "mongoose";

import config from '../config/database';

class Database {
   constructor() {
      this.connection = mongoose.connect(
         config.url
      )
   }
}

export default new Database();