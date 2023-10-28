import { memo, SVGProps } from 'react';

const Line6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 941 0' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H941' stroke='#FEFEFE' />
  </svg>
);

const Memo = memo(Line6Icon);
export { Memo as Line6Icon };
