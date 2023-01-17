import React from "react";
import { PrismicRichText } from "@prismicio/react";
import htmlSerializer from "../../utils/htmlSerializer";

const Text = ({ slice }) => {
  return (
    <div className="max-w-screen-md mx-auto">
      {slice.items.map((item, index) => (
        <PrismicRichText
        key={`p-${index}`}
          field={item.text.richText}
          components={htmlSerializer}
        />
      ))}
    </div>
  );
};

export default Text;
