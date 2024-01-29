import React, { FC } from "react";
import { CommentModel } from "../../models/comment.model";
import Comment from "../Comment/Comment";
import "./RepliesListing.scss";

const RepliesListing: FC<{ replies: Array<CommentModel> }> = (props: {
  replies: Array<CommentModel>;
}) => (
  <div className="RepliesListing" data-testid="RepliesListing">
    <div className="RepliesListing__VerticalLine"></div>
    <div>
      {props.replies.map((comment) => (
        <Comment {...comment} key={comment.id} />
      ))}
    </div>
  </div>
);

export default RepliesListing;
