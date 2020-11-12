import users from '../../data/userData.js';
import * as helpers from '../../utils/helpers.js';

export const list = () => {
    if (users.size === 0){
        return { status: 200, data: 'No Users' };
    }
    return { status: 200, data: Object.fromEntries(users) };
};

export const get = (mail) => {
    const user = helpers.findUserId(users, mail);
    if(user.error) return user;
    return { status: 200, data: user };
};