import bcrypt from 'bcryptjs';

export const createPasswordHash = async (password) => {
   return bcrypt.hash(password, 8);
}

// Função para comparar os passwords do banco e qual que foi que o usuário digitou

export const checkPassword = (user, password) => 
   bcrypt.compare(password, user.password);