import React, { FC } from "react";
import "./RepliesListing.scss";

const RepliesListing: FC<Array<Comment> | undefined> = (
  props: Array<Comment> | undefined
) => (
  <div className="RepliesListing" data-testid="RepliesListing">
    RepliesListing Component
  </div>
);

export default RepliesListing;
