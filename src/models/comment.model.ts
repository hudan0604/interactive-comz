import { UserModel } from "./user.model";

export class CommentModel {
  constructor(
    public id: number,
    public content: string,
    public createdAt: string,
    public score: number,
    public user: UserModel,
    public replies?: Array<CommentModel>,
    public replyingTo?: string
  ) {}

  public static createNewObject(): CommentModel {
    return new CommentModel(0, "", "", 0, UserModel.createNewObject(), []);
  }
}
