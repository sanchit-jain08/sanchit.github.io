import { memo, SVGProps } from 'react';

const Ellipse9Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 230 237' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={115} cy={118.5} rx={115} ry={118.5} fill='#F5F5F5' />
  </svg>
);

const Memo = memo(Ellipse9Icon);
export { Memo as Ellipse9Icon };
