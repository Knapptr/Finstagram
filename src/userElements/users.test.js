import { createUsersList } from './users'
import { waitForElementToBeRemoved } from '@testing-library/react';

let users = createUsersList()

test("init UsersList", () => {
    users.addUser();
    users.list[0].initializeUser("User1","You Sir One","user1@zer1.com","US1")
    expect(users.list.length).toEqual(1);
})

test('unNamed users cleanup', () => {
    users.addUser();
    users.cleanUp();
    expect(users.list.length).toEqual(1)
})
test('removeUser by Name', () => {
    users.removeUser(users.getIdByName("User1"))
    expect(users.list[0]).toEqual("init");
})
test('invalid Name given', () => {
    expect(()=>{users.getIdByName("xXx")}).toThrow()
})
test('get by UN', () => {
    users.addUser();
    users.list[0].initializeUser("xXx", "frank", "user1@zer.com", "us1");
    expect(users.returnUserByName("xXx").userName).toEqual("xXx");
    
})
test('setByUN', () => {
    users.returnUserByName("xXx").makePost("test.org")
    expect(users.list[0].posts.length).toEqual(1);
})
test('single follow feed', () => {
    users.addUser();
    users.list[1].initializeUser("user2", "user2", 'user2@zer.com', "us2")
    users.list[1].addFollow(users.getIdByName("xXx"))
    users.list[0].makePost("secondpost.com");

    expect(users.getFeed(users.getIdByName("user2")).length).toEqual(2);
})
test('2 follow feed', () => {
    users.addUser();
    users.list[2].initializeUser("user3", "user3", 'user3@zer.com', 'us3');
    users.list[1].addFollow(users.getIdByName("user3"));
    users.list[0].makePost("user0.com");
    users.list[2].makePost("thirdpost.com");
    users.list[0].makePost("user10.com");
    
    console.log(users.getFeed(users.getIdByName("user2")));
    expect(users.getFeed(users.getIdByName("user2")).length).toEqual(5);
    expect(users.getFeed(users.getIdByName("user2"))[users.getFeed(users.getIdByName("user2")).length-1].userid).toEqual(users.list[0].id)
})