import { memo, SVGProps } from 'react';

const Ellipse10Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 221 225' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={110.5} cy={112.5} rx={110.5} ry={112.5} fill='#F5F5F5' />
  </svg>
);

const Memo = memo(Ellipse10Icon);
export { Memo as Ellipse10Icon };
