import React, { lazy, Suspense } from "react";

const LazyRoundedImg = lazy(() => import("./RoundedImg"));

const RoundedImg = (
  props: { src: string } & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyRoundedImg {...props} />
  </Suspense>
);

export default RoundedImg;
