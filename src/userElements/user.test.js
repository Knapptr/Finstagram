import {createUser} from './user';

test('userCreation-initialize', () => {
    let user = createUser([0]);
    user.initializeUser("Bragley69", "Bragley", "42069r@aol.com", "USA");
    expect(user.meta.name).toBe("Bragley")
})