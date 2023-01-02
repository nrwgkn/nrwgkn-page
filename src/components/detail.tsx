import React from "react";
import { IItem } from "../types/Item";

interface Props {
  data: IItem;
}

const Detail: React.FC<Props> = ({ data }) => {
  return (
    <div className="l-galleryDetail">
      <h2 className="l-galleryDetail__title">{data.name}</h2>
      <ul className="l-galleryDetail__category">
        {data.category.map((ctg, idx) => {
          return <li key={`ctg_${idx}`}>{ctg}</li>;
        })}
      </ul>
      <div className="l-galleryDetail__image">
        <img src={data.thumbnail} alt={data.name} />
      </div>
      <div className="l-galleryDetail__urls">
        <dl>
          <dt>ポートフォリオURL</dt>
          <dd>{data.portforioUrl}</dd>
        </dl>
        {data.url && (
          <dl>
            <dt>参照元URL</dt>
            <dd>{data.url}</dd>
          </dl>
        )}
      </div>
      {data.text && <p className="l-galleryDetail__text">{data.text}</p>}
    </div>
  );
};

export { Detail };
