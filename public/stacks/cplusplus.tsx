import type { SVGProps } from "react";

type CPlusPlusProps = {
  size: string;
};

const CPlusPlus = ({ size }: CPlusPlusProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
    <rect x="6" y="8" width="4" height="8" rx="1" />
    <rect x="10" y="6" width="4" height="12" rx="1" />
    <rect x="14" y="8" width="4" height="8" rx="1" />
  </svg>
);

export default CPlusPlus;
