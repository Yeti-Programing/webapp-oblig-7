import { createPollService } from '../service/poll_service.js';
import { getPollService } from '../service/poll_service.js';
export function createPollRoute(mail,question){
    this.createPollService = new createPollService(mail,question);
}
export function getPollRoute(pollID,mail){
    this.getPollService = new getPollService(pollID,mail);
}