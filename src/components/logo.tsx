import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={52}
    height={45}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path fill="url(#b)" d="M47 15 33 29V15h14Z" />
      <path
        stroke="#FE21F6"
        d="M18.06.782 18.339.5H33.66l.258.26a731.211 731.211 0 0 1 4.836 4.935c2.946 3.034 6.54 6.785 9.138 9.666.138.152.273.303.404.45 2.503 2.8 3.348 5.252 3.183 7.403-.165 2.164-1.358 4.137-3.165 5.956-1.854 1.868-5.558 5.741-8.795 9.144a2883.966 2883.966 0 0 0-5.53 5.83l-.336.356H18.346l-.337-.356a2434.197 2434.197 0 0 0-5.53-5.83c-3.236-3.403-6.94-7.276-8.794-9.144-1.807-1.82-3-3.792-3.165-5.956-.165-2.151.68-4.603 3.183-7.403C6.257 12.953 9.95 9.09 13.01 5.937A801.437 801.437 0 0 1 18.06.782Z"
      />
      <path
        stroke="#FE21F6"
        d="M33.37 1.216v42.527a3941.263 3941.263 0 0 0-5.15-5.43c-3.237-3.402-6.941-7.275-8.796-9.143-1.806-1.82-3-3.792-3.165-5.956-.164-2.151.68-4.603 3.183-7.403 2.554-2.858 6.248-6.721 9.308-9.874a801.437 801.437 0 0 1 4.62-4.72Z"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={33}
        x2={40}
        y1={22}
        y2={15.781}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FE21F6" />
        <stop offset={1} stopColor="#BC34FF" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h52v45H0z" />
      </clipPath>
    </defs>
  </svg>
);
export { SvgComponent as Logo };
