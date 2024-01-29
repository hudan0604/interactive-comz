export class UserModel {
  constructor(public image: UserImgModel, public username: string) {}
  public static createNewObject(): UserModel {
    return new UserModel(UserImgModel.createNewObject(), "");
  }
}

export class UserImgModel {
  constructor(public png: string) {}

  public static createNewObject(): UserImgModel {
    return new UserImgModel("");
  }
}
