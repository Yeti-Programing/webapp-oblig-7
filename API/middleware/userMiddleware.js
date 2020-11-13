export const validateFields = (req,res,next) => {
    const { mail, userid } = req.body;
    if(!mail){
        return res.status(400).json({status: 400, message: "E-mail is missing"})
    }
    if(!userid){
        return res.status(400).json({status: 500, message: "UserID is missing"})
    }
    next();
};