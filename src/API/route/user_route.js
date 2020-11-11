import { createUserService } from '../service/user_service.js';
export function createUserRoute(mail, userID){
    this.createUserService = new createUserService(mail,userID);
}