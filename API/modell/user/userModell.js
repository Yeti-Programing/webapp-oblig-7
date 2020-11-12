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

export const create = (user) => {
    const {...data} = user;
    if(!data){
        return {status: 200, error: "No user created"};
    }
    if(users.has(data.mail)){
        return {status: 200, error: "Mail allready exists", data: Object.fromEntries(users)};
    }
    const userid = helpers.createId();
    users.set(data.mail, {userid});
    return { status: 200, data: Object.fromEntries(users)};
}