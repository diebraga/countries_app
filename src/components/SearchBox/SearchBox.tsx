import { getCursorStyle } from "@/utils/getCursorStyle/getCursorStyle";
import { useRouter } from "next/router";
import React from "react";

type SearchBoxProps = {
  searchInput: string;
  setSearchInput: (value: string) => void;
};

const SearchBox: React.FC<SearchBoxProps> = ({
  searchInput,
  setSearchInput,
}) => {
  const router = useRouter();
  const isNamePage = router.pathname.includes("[name]");

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        data-testid="search"
        value={searchInput}
        disabled={isNamePage}
        style={getCursorStyle(isNamePage)}
        onChange={(e) => setSearchInput(e.target.value)}
        className="px-4 py-2 w-64 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 h-5 w-5 text-gray-600 hover:text-gray-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </div>
  );
};

export { SearchBox };
