import { memo, SVGProps } from 'react';

const Ellipse4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 106 101' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={53} cy={50.5} rx={53} ry={50.5} fill='#EB8C00' />
  </svg>
);

const Memo = memo(Ellipse4Icon);
export { Memo as Ellipse4Icon };
