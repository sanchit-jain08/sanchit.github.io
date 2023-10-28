import { memo, SVGProps } from 'react';

const Ellipse5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 230 234' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={115} cy={117} rx={115} ry={117} fill='#F5F5F5' />
  </svg>
);

const Memo = memo(Ellipse5Icon);
export { Memo as Ellipse5Icon };
