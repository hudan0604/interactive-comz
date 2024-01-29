import React, { FC } from "react";
import { CommentModel } from "../../models/comment.model";
import RoundedImg from "../../shared/ui/RoundedImg/RoundedImg.lazy";
import Score from "../../shared/ui/Score/Score.lazy";
import RepliesListing from "../RepliesListing/RepliesListing";
import "./Comment.scss";

const Comment: FC<CommentModel> = (props: CommentModel) => {
  const replies: boolean = !!props?.replies?.length;
  return (
    <>
      <div className="Comment" data-testid="Comment">
        <Score></Score>
        <div className="Comment__Body">
          <div className="Body__Header">
            <div className="Header__Labels">
              <RoundedImg src={"/assets/images/" + props.user.image.png} />
              <span>{props.user.username}</span>
              <span>{props.createdAt}</span>
            </div>
            <span>
              {" "}
              <img src="" alt="" /> Reply
            </span>
          </div>
          <div className="Comment__Content">{props.content}</div>
        </div>
      </div>
      {replies && <RepliesListing replies={props.replies!} />}
    </>
  );
};

export default Comment;
