import React from "react";
import { Link } from "react-router-dom";

export default function MenuItem({ href, iconPath, label }) {
  return (
    <Link
      to={href}
      className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 "
    >
      <svg
        className="w-5 h-5 text-gray-400 transition duration-75 group-hover:text-gray-900 "
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 21"
      >
        <path d={iconPath} />
      </svg>
      <span className="ms-3 flex-1 text-lg whitespace-nowrap">{label}</span>
    </Link>
  );
}
