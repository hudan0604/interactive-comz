import React, { lazy, Suspense } from "react";
import { CommentModel } from "../../models/comment.model";

const LazyComment = lazy(() => import("./Comment"));

const Comment = (props: CommentModel & { children?: React.ReactNode }) => (
  <Suspense fallback={null}>
    <LazyComment {...props} />
  </Suspense>
);

export default Comment;
