import { createUser } from '../modell/user_modell.js';
export function createUserButtonClicked(mail){
    this.createUser = new createUser(mail);
}