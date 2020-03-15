import {createLike} from './like'

test('create Like element', () => {
    expect(createLike("Tyler").user).toEqual("Tyler");
  });