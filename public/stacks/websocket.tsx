import type { SVGProps } from "react";

type WebSocketProps = {
  size: string;
};

const WebSocket = ({ size }: WebSocketProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
    <path d="M4 12h4v4H4z" fillOpacity="0.3" />
    <path d="M12 4v4h4V4z" fillOpacity="0.3" />
    <path d="M16 16h4v4h-4z" fillOpacity="0.3" />
    <path d="M12 12h4v4h-4z" fillOpacity="0.5" />
  </svg>
);

export default WebSocket;
