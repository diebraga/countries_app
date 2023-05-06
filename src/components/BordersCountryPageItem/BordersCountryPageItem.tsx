import { Country } from "@/@types";
import React from "react";
import twemoji from "twemoji";

type BordersCountryPageItemProps = {
  country: Country;
};

const BordersCountryPageItem: React.FC<BordersCountryPageItemProps> = ({
  country,
}) => {
  return (
    <>
      {country.bordersWithFlag && country.bordersWithFlag.length > 0 && (
        <div className="mt-4 mb-10">
          <strong>Borders:</strong>
          <div className="flex flex-wrap justify-center space-x-4">
            {country.bordersWithFlag.map((border) => (
              <div key={border.name}>
                <p>{border.code}</p>
                <div
                  className="h-10 w-10"
                  dangerouslySetInnerHTML={{
                    __html: twemoji.parse(border.flag, {
                      folder: "svg",
                      ext: ".svg",
                    }),
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export { BordersCountryPageItem };
