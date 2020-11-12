import { list, get } from '../../modell/user/userModell.js';

export const getUsers = (req, res, next) => {
    const {status, data} = list();
    res.status(status).json({ status, data });
};

export const getUserByMail = (req, res, next) => {
    const { mail } = req.params;
    const { error, status, data } = get(mail);
    console.log(error,status,data);
    res.status(status).json({error, status, data, params: mail, });
};