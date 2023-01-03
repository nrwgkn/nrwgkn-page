import React from "react";
import Image from "next/image";
import { IItem } from "@/types/Item";

interface Props {
  itemList: IItem[];
  onClick: (index: number) => void;
}

const List: React.FC<Props> = ({ itemList, onClick }) => {
  return (
    <ul className="c-galleryList">
      {itemList.map((item, index) => {
        return (
          <li
            className="c-galleryList__item"
            key={`practice_${index}`}
            onClick={() => onClick(index)}
          >
            <div className="c-galleryList__image">
              <Image
                src={item.thumbnail}
                alt={item.name}
                width={800}
                height={600}
              />
            </div>
            <div className="c-galleryList__category">
              <ul>
                {item.category.map((ctg, idx) => (
                  <li key={`ctg_${idx}`}>{ctg}</li>
                ))}
              </ul>
            </div>
            <div className="c-galleryList__title">
              <p className="c-galleryList__name">{item.name}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export { List };
