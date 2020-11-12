export const findUserId = (map, id) => {
    const user = map.get(id);
    if(!user) return { status:404, error: "User not found" };
    return user;
}