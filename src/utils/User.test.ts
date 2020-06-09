import { IUser, User } from './User'

describe("class User", () => {

  const tempUser: IUser = {
    email: "test@redhat.com",
    name: "Test User",
    role: "test"
  }

  const user = new User(tempUser);
  it("user should be defined", () => {
    expect(user).toBeDefined();
  })
  it("Should have a me method", () => {
    expect(Object.keys(user.me()).length).toBe(3)
  })
})