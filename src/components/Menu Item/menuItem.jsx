import React from "react";
import { Link } from "react-router-dom";

export default function MenuItem({ href, label }) {
  return (
    <Link
      to={href}
      className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 "
    >
      <span className="ms-3 flex-1 text-lg whitespace-nowrap">{label}</span>
    </Link>
  );
}
