import React from "react";
import { IItem } from "../types/Item";

interface Props {
  itemList: IItem[];
  onClick: (index: number) => void;
}

const List: React.FC<Props> = ({ itemList, onClick }) => {
  return (
    <ul className="l-galleryList">
      {itemList.map((item, index) => {
        return (
          <li
            className="l-galleryList__item"
            key={`practice_${index}`}
            onClick={() => onClick(index)}
          >
            <div className="l-galleryList__image">
              <img src={item.thumbnail} alt={item.name} />
            </div>
            <div className="l-galleryList__category">
              <ul>
                {item.category.map((ctg, idx) => (
                  <li key={`ctg_${idx}`}>{ctg}</li>
                ))}
              </ul>
            </div>
            <div className="l-galleryList__title">
              <p className="l-galleryList__name">{item.name}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export { List };
