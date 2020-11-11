import { v4 as uuid } from 'uuid';
import { createUserRoute } from '../route/user_route.js';
export function createUser(mail){
    this.createUserRoute = new createUserRoute(mail,uuid());
}