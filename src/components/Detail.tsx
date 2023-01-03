import React from "react";
import { IItem } from "../types/Item";
import { Link } from "../components/Link";

interface Props {
  data: IItem;
  onClick: () => void;
}

const Detail: React.FC<Props> = ({ data, onClick }) => {
  return (
    <div className="c-galleryDetail">
      <div className="c-galleryDetail__close" onClick={onClick}>
        <p>CLOSE</p>
      </div>
      <div className="c-galleryDetail__title">
        <h2>{data.name}</h2>
        {data.url && <Link url={data.url} label={data.url} />}
      </div>
      <ul className="c-galleryDetail__category">
        {data.category.map((ctg, idx) => {
          return <li key={`ctg_${idx}`}>{ctg}</li>;
        })}
      </ul>
      <div className="c-galleryDetail__image">
        <img src={data.thumbnail} alt={data.name} />
      </div>
      {(data.portforioUrl || data.text) && (
        <div className="c-galleryDetail__description">
          {data.portforioUrl && (
            <dl>
              <dt>ポートフォリオURL</dt>
              <dd>
                <Link url={data.portforioUrl} label={data.portforioUrl} />
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
      )}
    </div>
  );
};

export { Detail };
