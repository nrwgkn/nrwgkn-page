import React from "react";
import { AppLayout } from "@/components/Layout";
import { Link } from "@/components/Link";

const Feature = () => {
  return (
    <AppLayout>
      <div className="p-about l-gallery">
        <div className="l-gallery__title c-title">
          <h1>ABOUT</h1>
        </div>
        <div className="l-gallery__body">
          <div className="l-gallery__container">
            <section className="p-aboutCard">
              <h2 className="p-aboutCard__title">
                <span>About me</span>
              </h2>
              <p className="p-aboutCard__description">
                フロントエンドエンジニアとしてWebアプリケーション開発に従事し、要件定義からリリースまで幅広い工程を経験してきました。
                <br />
                新卒でSEとしてキャリアをスタートし、その後Web制作会社でLPやHPの制作・保守を担当。
                <br />
                その後、IT企業で自動車関連のWebサービス開発を経験し、現在は大手EC企業でWebアプリケーションの開発を担当しています。
              </p>
            </section>
            <section className="p-aboutCard">
              <h2 className="p-aboutCard__title">
                <span>Link</span>
              </h2>
              <div className="p-aboutCard__link">
                <dl>
                  <dt>GitHub:</dt>
                  <dd>
                    <Link
                      url="https://github.com/nrwgkn"
                      label="https://github.com/nrwgkn"
                    />
                  </dd>
                </dl>
                <dl>
                  <dt>Qiita:</dt>
                  <dd>
                    <Link
                      url="https://qiita.com/nrwgkn"
                      label="https://qiita.com/nrwgkn"
                    />
                  </dd>
                </dl>
              </div>
            </section>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Feature;
