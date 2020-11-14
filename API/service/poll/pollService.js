import poll from '../../modell/poll/pollModell.js';

export const getPollById = async (pollid) => poll.find({pollid})

export const listPolls = async () => poll.find();

export const createPoll = async (data) => {
    poll.create(data)
};