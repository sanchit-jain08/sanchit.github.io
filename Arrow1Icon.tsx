import { memo, SVGProps } from 'react';

const Arrow1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 19 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20.5 -0.000938548C20.4995 -0.829365 19.8275 -1.50052 18.9991 -1.5L5.49906 -1.49155C4.67064 -1.49103 3.99948 -0.819036 4 0.00939057C4.00052 0.837818 4.67252 1.50897 5.50094 1.50845L17.5009 1.50094L17.5085 13.5009C17.509 14.3294 18.181 15.0005 19.0094 15C19.8378 14.9995 20.509 14.3275 20.5085 13.4991L20.5 -0.000938548ZM1.06132 20.0838L20.0613 1.06L17.9387 -1.06L-1.06132 17.9638L1.06132 20.0838Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(Arrow1Icon);
export { Memo as Arrow1Icon };
