export const validateFields = (req,res,next) => {
    const { mail } = req.body;
    if(!mail){
        return res.status(400).json({status: 400, message: "E-mail is missing"})
    }
    next();
};