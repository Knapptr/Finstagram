import {createPost} from './post';
import {assignID} from './makeUserId'

export const createUser = (userArray) => {
    
    return {
        userName: undefined,
        id: assignID(userArray),
        posts:[],
        likes:[],
        social: {
            following:[]
        },
        meta: {
            name:"",
            email: "",
            country: ""
        },
        initializeUser(userName,name,email,country) {
            this.userName = userName,
            this.meta.name = name,
            this.meta.email = email,
            this.meta.country = country
                
        },
        makePost(url) {
            this.posts.push(createPost(url,this.posts))
        },
        addFollow(userID) {
            this.social.following.push(userID)
        },
        unFollow(userID) {
            this.social.following = this.social.following.filter(el=>{return el!==userID})
        }
    }
}