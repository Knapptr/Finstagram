import {createPost} from './post';

test('captionTest', () => {
    let post = createPost("url",[0]);
    post.setCaption("caption");
    post.setCaption("craption")
    expect(post.caption).toBe("craption");
});
test('addLike', () => {
    let post = createPost("url",[0]);
    post.addLike("Tyler");
    expect(post.likes.length).toBe(1);
})
test("removeLike",()=> {
    let post = createPost("url",[0]);
    post.addLike("Tyler");
    post.removeLike("Tyler");
    expect(post.likes.length).toBe(0);
})
test("multipleLikes",()=> {
    let post = createPost("url",[0]);
    post.addLike("Tyler");
    post.addLike("Tyrone");
    post.removeLike("Tyler");
    expect(post.likes.length).toBe(1);
})