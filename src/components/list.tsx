import React from "react";
import { IItem } from "../pages/practice";

interface Props {
  itemList: IItem[];
  onClick: (index: number) => void;
}

const List: React.FC<Props> = ({ itemList, onClick }) => {
  return (
    <ul className="m-practiceList">
      {itemList.map((item, index) => {
        return (
          <li
            className="m-practiceList__item"
            key={`practice_${index}`}
            onClick={() => onClick(index)}
          >
            <div className="m-practiceList__image">
              <img src={item.thumbnail} alt={item.name} />
            </div>
            <div className="m-practiceList__category">
              <ul>
                {item.category.map((ctg, idx) => (
                  <li key={`ctg_${idx}`}>{ctg}</li>
                ))}
              </ul>
            </div>
            <div className="m-practiceList__title">
              <p className="m-practiceList__name">{item.name}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export { List };
