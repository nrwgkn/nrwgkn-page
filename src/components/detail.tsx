import React from "react";
import { IItem } from "../pages/practice";

interface Props {
  data: IItem;
}

const Detail: React.FC<Props> = ({ data }) => {
  return (
    <div className="m-practiceDetail">
      <h2 className="m-practiceDetail__title">{data.name}</h2>
      <ul className="m-practiceDetail__category">
        {data.category.map((ctg, idx) => {
          return <li key={`ctg_${idx}`}>{ctg}</li>;
        })}
      </ul>
      <div className="m-practiceDetail__image">
        <img src={data.thumbnail} alt={data.name} />
      </div>
      <div className="m-practiceDetail__urls">
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
      {data.text && <p className="m-practiceDetail__text">{data.text}</p>}
    </div>
  );
};

export { Detail };
