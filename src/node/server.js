import express from 'express';
import validator from 'express-validator';

const { check, validaionResult, body } = validator;

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.post('/signup', [body('mail').isEmail()], (req, res) =>{
    const errors = validaionResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    return res
        .status(200)
        .json({ success: true, data: req.body.mail });
});

app.listen(3000, () => {
 console.log('server is running...')
});