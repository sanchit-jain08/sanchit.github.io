import { memo, SVGProps } from 'react';

const Vector1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1440 73' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M250.218 73L0 0H1440L250.218 73Z' fill='white' />
  </svg>
);

const Memo = memo(Vector1Icon);
export { Memo as Vector1Icon };
