import type { SVGProps } from "react";

type TerraformProps = {
  size: string;
};

const Terraform = ({ size }: TerraformProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
    <path d="M12 6l6 3.5v7L12 22l-6-3.5v-7L12 6z" />
    <path d="M12 9l3 1.75v5.5L12 17l-3-1.75v-5.5L12 9z" fillOpacity="0.3" />
  </svg>
);

export default Terraform;
