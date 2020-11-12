import {v4 as uuid} from 'uuid';

export const findUserId = (map, id) => {
    const user = map.get(id);
    if(!user) return { status:404, error: "User not found" };
    return user;
}

export const createId = () => uuid();