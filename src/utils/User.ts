export class User {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  get username() {
    return this.name;
  }
}