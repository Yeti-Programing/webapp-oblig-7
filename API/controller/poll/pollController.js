import { pollService } from '../../service/poll/index.js';

export const getPolls = async (req, res, next) => {
    const poll = await pollService.getPollById(req.params.pollid);
    if(!poll){
        return res.status(404).json({error: "Not found"});
    }
    res.status(200).json(poll);
};

export const polls = async (req, res, next) => {
    const findPoll = await pollService.listPolls();
}

export const createPoll = async (req, res, next) => {
    try {
        //const create = await pollService.createPoll(req.body.)
    }
    catch(error) {
        res.status(400).json({ error: "Create error"});
    }
}