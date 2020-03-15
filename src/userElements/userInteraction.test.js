import {createUser} from './user';

let usersArray =["root"]
let user1 = createUser(usersArray);
user1.initializeUser("User1","Use R. Wan","butts@butts.butt","usa")
usersArray.push(user1)
//REMOVE ROOT USER
usersArray = usersArray.filter(el=>{return el!=="root"})
//
let user2 = createUser(usersArray);
user2.initializeUser("User2","Use R. Tu","Borts@butts.butt","usa")
usersArray.push(user2);

test("ensure that users are initialized", () => {
    expect(usersArray.length).toBe(2);
})

test("user1 follows user 2", () => {
    user1.addFollow(user2.id);
    expect(user1.social.following).toContainEqual(user2.id)
})
test("user1 unfollows user 2", () => {
    user1.unFollow(user2.id);
    expect(user1.social.following.length).toEqual(0);
})
test("user 2 makes post", () => {
    user2.makePost("http://image.com");
    expect(user2.posts.length).toEqual(1)
})
test("user1 likes user2 post", () => {
    user2.posts[0].addLike(user1.id);
    expect(user2.posts[0].likes.length).toEqual(1);
    expect(user2.posts[0].likes[0].user).toEqual(user1.id)
})
test("user1 unlikes user2 post", () => {
    user2.posts[0].removeLike(user1.id);
    expect(user2.posts[0].likes.length).toEqual(0);
    
})
test("user1 Comments on user1 post", () => {
    user2.posts[0].addComment(user1.id, "Love it!");
    expect(user2.posts[0].comments.length).toEqual(1);
    expect(user2.posts[0].comments[0].user).toEqual(user1.id);
    expect(user2.posts[0].comments[0].comment).toEqual("Love it!")
})
test("user1 deletes comment", () => {
    user2.posts[0].removeComment(user2.posts[0].comments[0].id)
    expect(user2.posts[0].comments.length).toEqual(0);
})