import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AppLayout } from "../components/layout";
import { List } from "../components/list";
import { Detail } from "../components/detail";

const practiceData = [
  {
    name: "株式会社 FiNC Technologies 採用情報ページ",
    portforioUrl: "https://nrwgkn.github.io/reproduction-site-finc_recruit/",
    category: ["模写コーディング", "JavaScript", "jQuery", "Sass"],
    url: "https://company.finc.com/recruit/",
    thumbnail: "../img/practice/img_reproduction_finc.jpg",
  },
  {
    name: "Nature Remo LP",
    portforioUrl: "https://nrwgkn.github.io/reproduction-site-remo_lp/",
    category: ["模写コーディング", "JavaScript", "Sass"],
    url: "https://nature.global/jp/landing-page-dm-re/",
    thumbnail: "../img/practice/img_reproduction_remo.jpg",
  },
  {
    name: "東京上野ワンダラー（Tokyo Ueno Wonderer）",
    portforioUrl: "https://nrwgkn.github.io/reproduction-site-ueno_wonderer/",
    category: ["模写コーディング", "JavaScript", "jQuery", "Sass"],
    url: "https://ueno-wonderer.jp/",
    thumbnail: "../img/practice/img_reproduction_ueno.jpg",
  },
  {
    name: "ベイク チーズタルト",
    portforioUrl: "https://nrwgkn.github.io/reproduction-site-bake/",
    category: ["模写コーディング", "JavaScript", "jQuery", "Sass"],
    url: "https://cheesetart.com/",
    thumbnail: "../img/practice/img_reproduction_bake.jpg",
  },
  {
    name: "React ストップウォッチ",
    portforioUrl: "https://nrwgkn.github.io/react-stopwatch/",
    category: ["React.js"],
    thumbnail: "../img/practice/img_react_stopwatch.png",
    text: "",
  },
  {
    name: "React 電卓",
    portforioUrl: "https://nrwgkn.github.io/react-calculator/",
    category: ["React.js"],
    thumbnail: "../img/practice/img_react_calculator.png",
    text: "",
  },
  {
    name: "React メモ",
    portforioUrl: "https://nrwgkn.github.io/react-memo/",
    category: ["React.js"],
    thumbnail: "../img/practice/img_react_memo.png",
    text: "",
  },
  {
    name: "Trending Posts",
    portforioUrl: "https://trending-posts.netlify.app/",
    category: ["React.js", "TypeScript", "Sass", "Netlify", "Twitter API"],
    thumbnail: "../img/practice/img_react_twitterApi.png",
    text: "",
  },
];

export interface IItem {
  name: string;
  portforioUrl: string;
  category: string[];
  url?: string;
  thumbnail: string;
  text?: string;
}

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
      <div className="p-practice">
        <div className="p-practice__title m-title m-title--page">
          <h1>PRACTICE</h1>
        </div>
        <div className="p-practice__body">
          <div className="p-practice__container">
            {showData ? (
              <Detail data={showData} />
            ) : (
              <>
                {practiceData.length > 0 && (
                  <List itemList={practiceData} onClick={onChangeView} />
                )}
              </>
            )}
          </div>
        </div>
        {showData && (
          <div className="m-backButton" onClick={resetView}>
            <p>BACK</p>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Practice;
