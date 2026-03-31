import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 减轻 dev 下 SegmentViewNode / manifest 一类 devtools 触发的偶发报错 */
  devIndicators: false,
};

export default nextConfig;
