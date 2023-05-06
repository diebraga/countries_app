import Link from "next/link";
import React from "react";
import { SearchBox } from "../SearchBox/SearchBox";

const Header: React.FC = () => {
  return (
    <nav>
      <div className="max-w-[1300px] mx-auto px-8 py-4 header">
        <div className="flex justify-between items-center border-2 p-4 rounded-2xl shadow-sm py-6">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-700 text-xl md:text-2xl lg:text-2xl"
          >
            COUNTRIES APP
          </Link>
          <SearchBox />
        </div>
      </div>
    </nav>
  );
};

export default Header;
