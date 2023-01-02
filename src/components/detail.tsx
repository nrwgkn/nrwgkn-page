import React from "react";
import { IItem } from "@/types/Item";

interface Props {
  data: IItem;
}

const Detail: React.FC<Props> = ({ data }) => {
  return (
    <div className="m-galleryDetail">
      <h2 className="m-galleryDetail__title">{data.name}</h2>
      <ul className="m-galleryDetail__category">
        {data.category.map((ctg, idx) => {
          return <li key={`ctg_${idx}`}>{ctg}</li>;
        })}
      </ul>
      <div className="m-galleryDetail__image">
        <img src={data.thumbnail} alt={data.name} />
      </div>
      <div className="m-galleryDetail__comment">
        {data.portforioUrl && (
          <dl>
            <dt>ポートフォリオURL</dt>
            <dd>
              <a
                href={data.portforioUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.portforioUrl}
              </a>
            </dd>
          </dl>
        )}
        {data.url && (
          <dl>
            <dt>参照元URL</dt>
            <dd>
              <a href={data.url} target="_blank" rel="noopener noreferrer">
                {data.url}
              </a>
            </dd>
          </dl>
        )}
        {data.text && (
          <dl>
            <dt>説明</dt>
            <dd>{data.text}</dd>
          </dl>
        )}
      </div>
    </div>
  );
};

export { Detail };
