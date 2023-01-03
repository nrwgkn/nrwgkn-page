import React from "react";

interface Props {
  url: string;
  label: string;
}

const Link: React.FC<Props> = ({ url, label }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="c-link">
      {label}
    </a>
  );
};

export { Link };
