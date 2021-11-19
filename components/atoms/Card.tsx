import React, { ReactNode } from "react";

const Card: React.FC<{ title: string; footer?: ReactNode }> = ({
  title,
  children,
  footer,
}) => (
  <div className="border rounded overflow-hidden shadow-lg flex flex-col justify-between">
    <div>
      <p className="px-4 py-2 bg-red-600 text-white">{title}</p>
      <hr />
      <div className="px-4 py-2">{children}</div>
    </div>
    <div className="p-2 bg-gray-50 text-sm py-2 px-4 rounded text-right">
      {footer}
    </div>
  </div>
);

export default Card;
