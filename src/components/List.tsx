import React from "react";
import { IItem } from "../types/Item";

interface Props {
  itemList: IItem[];
  onClick: (index: number) => void;
}

const List: React.FC<Props> = ({ itemList, onClick }) => {
  return (
    <ul className="m-galleryList">
      {itemList.map((item, index) => {
        return (
          <li
            className="m-galleryList__item"
            key={`practice_${index}`}
            onClick={() => onClick(index)}
          >
            <div className="m-galleryList__image">
              <img src={item.thumbnail} alt={item.name} />
            </div>
            <div className="m-galleryList__category">
              <ul>
                {item.category.map((ctg, idx) => (
                  <li key={`ctg_${idx}`}>{ctg}</li>
                ))}
              </ul>
            </div>
            <div className="m-galleryList__title">
              <p className="m-galleryList__name">{item.name}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export { List };