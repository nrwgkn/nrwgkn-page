import React, { useState } from "react";
import { AppLayout } from "@/components/Layout";
import { List } from "@/components/List";
import { Detail } from "@/components/Detail";
import { IItem } from "@/types/Item";
import { WORKS_DATA } from "@/data";

const Works = () => {
  const [showData, setShowData] = useState<IItem | null>(null);

  const onChangeView = (index: number) => {
    setShowData(WORKS_DATA[index]);
  };

  const resetView = () => {
    setShowData(null);
  };

  return (
    <AppLayout>
      <div className="p-works l-gallery">
        <div className="l-gallery__title c-title">
          <h1>WORKS</h1>
        </div>
        <div className="l-gallery__body">
          <div className="l-gallery__container">
            {showData ? (
              <Detail data={showData} onClick={resetView} />
            ) : (
              <>
                {WORKS_DATA.length > 0 && (
                  <List itemList={WORKS_DATA} onClick={onChangeView} />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Works;
