import { userService } from '../../service/user/index.js';
import catchAsyncErrors from '../../middleware/catchAsync.js';
import ErrorHander from '../../utils/errorHandler.js';

export const get = catchAsyncErrors(async (req,res,next) => {
    const user = await userService.getUserByMail(req.params.mail);
    if(user.length === 0) { 
        return next(
            new ErrorHander(`Finner ikke bruker med mail: ${req.params.mail}`, 404)
        );
    }
    res.status(200).json(user);
});

export const getId = catchAsyncErrors(async (req,res,next) => {
    const user = await userService.getUserById(req.params.id);
    if(user.length === 0) { 
        return next(
            new ErrorHander(`Finner ikke bruker med ID: ${req.params.id}`, 404)
        );
    }
    res.status(200).json(user);
});

export const users = catchAsyncErrors(async (req,res,next) => {
    const result = await userService.listUsers();
    res.status(200).json({...result});
});

export const create = catchAsyncErrors(async (req,res,next) => {
        const mailCheck = await userService.getUserByMail(req.body.mail);
        if(mailCheck.length === 1){
            return next(
                new ErrorHander(`Mail eksisterer allerede i systemet: ${req.body.mail}`, 409)
            );
        }
        else{
            await userService.createUser(req.body);
            res.status(201).json({success: true, message: "Mail var lagt til i database", user: req.body});
        }
});