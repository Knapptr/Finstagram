import {createUser} from './user'
import { cleanup } from '@testing-library/react'
export const createUsersList = () => {
    return {
        users: ["init"],
        addUser() {
            this.users.push(createUser(this.users))
        },
        removeUser(userID) {
            if (userID!==undefined) {
                this.users = this.users.filter(el => { return el.id !== userID })
            } else { throw ("Invalid userID or no such user") }
            if(this.users.length<=0){this.users=["init"]}
        },
        cleanUp() {
            if (this.users.includes("init")) {
                this.users.splice(this.users.indexOf("init"),1)
            }
            this.users = this.users.filter(el=>{return el.userName!==undefined})
        },
        getIdByName(name) {
            let searchedList = this.users.filter(el => { return el.userName === name })
            if (searchedList.length === 1) {
                return searchedList[0].id
            } else { throw("Invalid userID or no such user") }

        }
    }
}