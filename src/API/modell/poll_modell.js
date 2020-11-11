import { createPollRoute } from '../route/poll_route.js';
import { getPollRoute } from '../route/poll_route.js';
export function createPoll(mail,question){
    this.createPollRoute = new createPollRoute(mail,question);
}
export function getPoll(pollID,mail){
    this.getPollRoute = new getPollRoute(pollID,mail);
}