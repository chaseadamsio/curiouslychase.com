import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={106}
    height={106}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M63.935 65.428v-26.53h27.007l-27.007 26.53Z" />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M36.644 39.06c-7.568 7.703-7.656 20.023-.198 27.832m26.057-54.86L36.288 38.71c-7.758 7.895-7.848 20.523-.203 28.527l26.442 27.687h-11.7a19.5 19.5 0 0 1-13.788-5.712L14.7 66.873c-7.692-7.692-7.603-20.19.197-27.772l22.175-21.551a19.5 19.5 0 0 1 13.59-5.517h11.842Zm28.799 54.76L64.196 94.208V12.725L87.813 35.94l3.292 3.236c7.697 7.565 7.785 19.943.197 27.617ZM63.196 12.755v81.422l-26.388-27.63c-7.272-7.613-7.187-19.625.193-27.135l26.195-26.657Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={79.212}
        x2={64.096}
        y1={38.898}
        y2={55.648}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BA35FF" />
        <stop offset={1} stopColor="currentColor" />
      </linearGradient>
    </defs>
  </svg>
);
export { SvgComponent as Logo };
