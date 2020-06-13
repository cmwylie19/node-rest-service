export interface IUser {
  name: string;
  email: string;
  role: string;
}

export class User {
  protected user: IUser;

  constructor(user: IUser) {
    this.user = user;
  }

  public me(): IUser {
    return this.user;
  }
}
