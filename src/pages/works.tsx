import React, { useState } from "react";
import { AppLayout } from "@/components/Layout";
import { List } from "@/components/List";
import { Detail } from "@/components/Detail";
import { IItem } from "@/types/Item";

const worksData = [
  {
    name: "株式会社キャンディル",
    category: [
      "Responsive",
      "JavaScript",
      "jQuery",
      "Sass",
      "WordPress",
      "Speed improvement",
    ],
    url: "https://www.candeal.co.jp/",
    thumbnail: "../img/works/img_works_candeal.jpg",
    text: "サイトの大幅改修に携わりました。既存ページの改修、新規で追加になったページの制作も対応しました。1ページあたりのメディア（主に画像）数が多いページが多く、読み込み速度が著しく下がることのないよう、PageSpeedInsight等活用し画像の最適化や遅延読み込みなど表示速度の部分も意識して制作を進めました。",
  },
  {
    name: "ネットカフェダイス",
    category: ["Responsive", "JavaScript", "Sass"],
    url: "https://www.diskcity.co.jp/",
    thumbnail: "../img/works/img_works_dice.jpg",
  },
  {
    name: "【どらなび】バス運転手専門の就職・転職支援求人サイト",
    category: ["Responsive", "JavaScript", "jQuery", "Photoshop"],
    url: "https://www.bus-dnavi.com/",
    thumbnail: "../img/works/img_works_drinavi.jpg",
  },
  {
    name: "インプレックスアンドカンパニー株式会社　コーポレートサイト",
    category: ["Responsive", "JavaScript", "Speed improvement"],
    url: "https://www.imprexc.jp/",
    thumbnail: "../img/works/img_works_imprexc.jpg",
  },
  {
    name: "2020年秋プレミアムブリッジサロンLP",
    category: ["Responsive", "JavaScript", "Photoshop"],
    url: "https://www.bridge-salon.jp/premium_salon/2020autumn/",
    thumbnail: "../img/works/img_works_bridgelp.jpg",
  },
  {
    name: "リクリック コーポレートサイト",
    category: ["Responsive", "JavaScript", "Sass", "Speed improvement"],
    url: "https://www.reclick.co.jp/",
    thumbnail: "../img/works/img_works_reclick.png",
  },
  {
    name: "東京・錦糸町のメンバーズバー　CAMPO BAR",
    category: ["JavaScript", "Sass", "Speed improvement"],
    url: "http://campo-bar.com/",
    thumbnail: "../img/works/img_works_bar.jpg",
  },
];

const Works = () => {
  const [showData, setShowData] = useState<IItem | null>(null);

  const onChangeView = (index: number) => {
    setShowData(worksData[index]);
  };

  const resetView = () => {
    setShowData(null);
  };

  return (
    <AppLayout>
      <div className="p-works l-gallery">
        <div className="l-gallery__title m-title">
          <h1>WORKS</h1>
        </div>
        <div className="l-gallery__body">
          <div className="l-gallery__container">
            {showData ? (
              <Detail data={showData} onClick={resetView} />
            ) : (
              <>
                {worksData.length > 0 && (
                  <List itemList={worksData} onClick={onChangeView} />
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
