import React, { lazy, Suspense } from 'react';

const LazyCommentsListing = lazy(() => import('./CommentsListing'));

const CommentsListing = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCommentsListing {...props} />
  </Suspense>
);

export default CommentsListing;
