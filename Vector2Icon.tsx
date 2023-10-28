import { memo, SVGProps } from 'react';

const Vector2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1438 113' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M249.871 113L0 0H1438L249.871 113Z' fill='white' />
  </svg>
);

const Memo = memo(Vector2Icon);
export { Memo as Vector2Icon };
