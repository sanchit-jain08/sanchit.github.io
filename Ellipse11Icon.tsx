import { memo, SVGProps } from 'react';

const Ellipse11Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 222 225' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={111} cy={112.5} rx={111} ry={112.5} fill='#F5F5F5' />
  </svg>
);

const Memo = memo(Ellipse11Icon);
export { Memo as Ellipse11Icon };
