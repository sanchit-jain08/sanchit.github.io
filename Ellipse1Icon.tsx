import { memo, SVGProps } from 'react';

const Ellipse1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 106 101' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={53} cy={50.5} rx={53} ry={50.5} fill='#D85555' />
  </svg>
);

const Memo = memo(Ellipse1Icon);
export { Memo as Ellipse1Icon };
