import { createPoll } from '../modell/poll_modell.js';
import { getPoll } from '../modell/poll_modell.js';
export function createPollButtonClicked(mail,question){
    this.createPoll = new createPoll(mail,question);
}
export function getPollButtonClicked(pollID,mail){
    this.getPoll = new getPoll(pollID,mail);
}