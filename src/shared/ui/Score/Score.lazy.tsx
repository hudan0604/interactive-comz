import React, { lazy, Suspense } from 'react';

const LazyScore = lazy(() => import('./Score'));

const Score = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyScore {...props} />
  </Suspense>
);

export default Score;
