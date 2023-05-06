import React from "react";
import twemoji from "twemoji";
import Link from "next/link";
import { Country } from "@/@types";

const CountryCard: React.FC<{ country: Country }> = ({ country }) => {
  const svgImage = twemoji.parse(country.flag, {
    folder: "svg",
    ext: ".svg",
  });

  return (
    <Link href={`/${country.name.common}`}>
      <div className="border-2 p-4 rounded-2xl shadow-md cursor-pointer transition duration-300 hover:border-blue-500 hover:shadow-lg">
        <div dangerouslySetInnerHTML={{ __html: svgImage }} />
        <h2 className="text-2xl font-bold mb-2">{country.name.common}</h2>
      </div>
    </Link>
  );
};

export { CountryCard };
