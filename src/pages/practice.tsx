import React, { useState } from "react";
import { AppLayout } from "../components/Layout";
import { List } from "../components/List";
import { Detail } from "../components/Detail";
import { IItem } from "../types/Item";
import { practiceData } from "../data";

const Practice = () => {
  const [showData, setShowData] = useState<IItem | null>(null);

  const onChangeView = (index: number) => {
    setShowData(practiceData[index]);
  };

  const resetView = () => {
    setShowData(null);
  };

  return (
    <AppLayout>
      <div className="p-practice l-gallery">
        <div className="l-gallery__title c-title">
          <h1>PRACTICE</h1>
        </div>
        <div className="l-gallery__body">
          <div className="l-gallery__container">
            {showData ? (
              <Detail data={showData} onClick={resetView} />
            ) : (
              <>
                {practiceData.length > 0 && (
                  <List itemList={practiceData} onClick={onChangeView} />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Practice;
