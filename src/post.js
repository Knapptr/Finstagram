import {createLike} from './like'
import { assignID } from './makeUserId';

export const createPost = (user,url,postsArray) => {
    
    return {
        userid: user,
        id: assignID(postsArray),
        date: new Date(),
        photoSrc:url,
        caption:"",
        likes: [],
        comments:[],
        setCaption(text) {
            this.caption = text
        },
        addComment(userID, comment) {
            this.comments.push({id:assignID(this.comments),user:userID,comment})
        },
        removeComment(commentID) {
            let updatedList = this.comments.filter(el => { return el.id !== commentID })
            this.comments = updatedList;
        },
        addLike(userID) {
            this.likes.push(createLike(userID));
        },
        removeLike(userID) {
            this.likes = (this.likes.filter(el=>{return el.user!==userID}))
        },
        setImage(url) {
            this.photoSrc=(url)
        },

    }
}