import { userService } from '../../service/user/index.js';

export const get = async (req,res,next) => {
    const user = await userService.getUserByMail(req.params.mail);
    if(!user) { 
        return res.status(404).json({error: "Not found"});
    }
    res.status(200).json(user);
};

export const users = async (req,res,next) => {
    const result = await userService.listUsers();
    res.status(200).json({...result});
};

export const create = async (req,res,next) => {
    try {
        const mailCheck = await userService.getUserByMail(req.body.mail);
        if(mailCheck.length >= 1){
            res.status(409).json({ error: "Mail exists in system" });
        }
        else{
            const user = await userService.createUser(req.body);
            res.status(201).json(user);
        }
    } catch (error) {
        res.status(400).json({ error: "Create error" });
    }
};