import {createUser} from './user'
import { cleanup } from '@testing-library/react'
export const createUsersList = () => {
    return {
    list: ["init"],
        addUser() {
            this.list.push(createUser(this.list))
            if(this.list[0]==="init"){this.list.splice(0,1)}
        },
        removeUser(userID) {
            if (userID!==undefined) {
                this.list = this.list.filter(el => { return el.id !== userID })
            } else { throw ("Invalid userID or no such user") }
            if(this.list.length<=0){this.list=["init"]}
        },
        cleanUp() {
            if (this.list.includes("init")) {
                this.list.splice(this.list.indexOf("init"),1)
            }
            this.list = this.list.filter(el=>{return el.userName!==undefined})
        },
        getIdByName(name) {
            let searchedList = this.list.filter(el => { return el.userName === name })
            if (searchedList.length === 1) {
                return searchedList[0].id
            } else { throw("Invalid userID or no such user") }

        },
        returnUserByID(id) {
            let user = this.list.filter(el => el.id === id)[0];
            return user;
        },
        returnUserByName(name) {
          return this.returnUserByID(this.getIdByName(name))  
        },
        getFeed(userID) {
            let feedArray = [];
            this.returnUserByID(userID).social.following.forEach(el => {
                let userPosts = this.returnUserByID(el).posts
                feedArray.push(...userPosts)
            })
            feedArray.sort((a,b)=> b.date-a.date)
            return feedArray;
        }
    }
}