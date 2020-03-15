import { createUsersList } from './users'

let users = createUsersList()

test("init UsersList", () => {
    users.addUser();
    users.users[1].initializeUser("User1","You Sir One","user1@zer1.com","US1")
    expect(users.users.length).toEqual(2);
})
test('post Init Cleanup', () => {
    users.cleanUp();
    expect(users.users.length).toEqual(1)
})
test('unNamed users cleanup', () => {
    users.addUser();
    users.cleanUp();
    expect(users.users.length).toEqual(1)
})
test('removeUser by Name', () => {
    users.removeUser(users.getIdByName("User1"))
    expect(users.users[0]).toEqual("init");
})
test('invalid Name given', () => {
    expect(()=>{users.getIdByName("frank")}).toThrow()
})