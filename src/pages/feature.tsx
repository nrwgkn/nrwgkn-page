import React from "react";
import Image from "next/image";
import { AppLayout } from "@/components/Layout";
import { Link } from "@/components/Link";

const Feature = () => {
  return (
    <AppLayout>
      <div className="p-feature l-gallery">
        <div className="l-gallery__title c-title">
          <h1>FEATURE</h1>
        </div>
        <div className="l-gallery__body">
          <div className="l-gallery__container">
            <div className="p-featureCard">
              <h2 className="p-featureCard__title">
                <span>Trending Posts</span>
              </h2>
              <div className="p-featureCard__image">
                <Image
                  src="/img/feature/mov_react_twitterApi.gif"
                  alt="trending posts"
                  width={720}
                  height={480}
                />
              </div>
              <div className="p-featureCard__data">
                <p>概要</p>
                <dl>
                  <dt>URL</dt>
                  <dd>
                    <Link
                      url="https://trending-posts.netlify.app/"
                      label="https://trending-posts.netlify.app/"
                    />
                  </dd>
                </dl>
                <dl>
                  <dt>使用技術</dt>
                  <dd>
                    Figma, React, TypeScript, Sass, Netlify, Twitter API, AWS
                    Lambda, API Gateway
                  </dd>
                </dl>
                <dl>
                  <dt>概要</dt>
                  <dd>
                    検索キーワードに対して一定数以上いいねが付いたツイートを検索できるアプリケーション
                    <br />
                    指定するいいね数は変更が可能（デフォルトは1000）
                  </dd>
                </dl>
                <dl>
                  <dt>制作期間</dt>
                  <dd>1週間程度（デザイン、Twitter APIの準備含む）</dd>
                </dl>
              </div>
              <div className="p-featureCard__comment">
                <span>コメント</span>
                <p>
                  きっかけはtwitterで人気のあるベストコスメの投稿を簡単に検索したかったため。twitter自体でも特定の検索条件を指定することで検索は可能ですが、より直感的に検索したいと思ったのと、自分の持つ知識や技術で何かアプリケーションを作成したかったため挑戦しました。
                  <br />
                  Twitter
                  APIの使用にあたって利用申請やドキュメントの理解に苦戦しました。呼び出しにはLambdaとAPI
                  Gatewayを使用しています。AWSの認定資格を取得した際に大体の役割については理解していましたが、自力で実装に組み込んだことはなかったため今回選定してみました。
                  <br />
                  Netlifyについては、GitHubと連携することで簡単に更新できて非常に便利でした。
                  <br />
                  調べながら実際に手を動かすことでより理解を深められたのと、APIを利用したアプリケーションを自力で作成できたという達成感がありました。
                  <br />
                  リツイート数でも検索できるようにするなど機能の拡張をしていきたいです。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Feature;
