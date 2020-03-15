export const createLike = (user) => {
    return {
        user,
        time: new Date()
    }
}