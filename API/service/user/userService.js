import user from '../../modell/user/userModell.js';

export const getUserByMail = async (mail) => user.find({mail});

export const listUsers = async () => user.find();

export const createUser = async (data) => {
    user.create(data)
};