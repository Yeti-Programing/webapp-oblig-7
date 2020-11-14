import { pollService } from '../../service/poll/index.js';
import ErrorHander from '../../utils/errorHandler.js';
import catchAsyncErrors from '../../middleware/catchAsync.js';

export const getPolls = catchAsyncErrors(async (req, res, next) => {
    const poll = await pollService.getPollById(req.params.pollid);
    if(!poll){
        return next(
            new ErrorHander(`Finner ikke poll med ID: ${req.params.pollid}`, 404)
        );
    }
    res.status(200).json(poll);
});

export const polls = catchAsyncErrors(async (req, res, next) => {
    const findPoll = await pollService.listPolls();
    res.status(200).json({...findPoll});
})

export const createPoll = catchAsyncErrors(async (req, res, next) => {
    try {
        await pollService.createPoll(req.body)
        res.status(201).json({message: "success"})
    }
    catch(error) {
        new ErrorHander(`Mail eksisterer allerede i systemet: ${req.body}`, 400)
    }
})