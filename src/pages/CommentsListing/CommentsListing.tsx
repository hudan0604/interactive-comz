import React, { FC } from "react";
import "./CommentsListing.scss";
import data from "../../data.json";
import Comment from "../../components/Comment/Comment";

interface CommentsListingProps {}

const commentsListing = data.comments.map((comment) => (
  <Comment {...comment} key={comment.id} />
));

const CommentsListing: FC<CommentsListingProps> = () => (
  <>
    <div className="CommentsListingWraper">
      <div className="CommentsListing" data-testid="CommentsListing">
        {commentsListing}
      </div>
    </div>
  </>
);

export default CommentsListing;
