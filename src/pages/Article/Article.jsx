import React, { useState, useEffect } from "react";
import "./article.scss";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ReactMarkdown from "react-markdown";

import pictureBanner from "@/img/interesting/interesting_1.jpg";
import article_1 from "@/img/articles/article_1.jpg";
import article_2 from "@/img/articles/article_2.jpg";
import article_3 from "@/img/articles/article_3.jpg";
import article_3_small from "@/img/articles/article_3_small.jpg";
import article_4 from "@/img/articles/article_4.jpg";
import article_4_small from "@/img/articles/article_4_small.jpg";
import PictureComponent from "@/../plugins/PictureComponent";
import articles from "@/data/articles.json";
import Interesting from "@/components/Interesting/Interesting";
import backArrow from "@/img/icons/arrow-down.svg";
import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Article() {
  const [currentArticle, setCurrentArticle] = useState({ ...articles[0] });

  const { id } = useParams();

  const navigate = useNavigate();

  const goBack = (event) => {
    event.preventDefault();
    navigate(-1);
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.activeElement.blur();
  };

  useEffect(() => {
    const updateCurrentArticle = () => {
      // const currentPath = window.location.href;
      // const regexPattern = /article\/([^\/]+)/;
      // const result = currentPath.match(regexPattern);
      // const articleID = result ? result[1] : null;

      const newArticle = articles.find((el) => el.id === +id);
      setCurrentArticle(newArticle);
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.activeElement.blur();
    };

    updateCurrentArticle();

    window.addEventListener("popstate", updateCurrentArticle);
    document.title = `CarMasters - ${currentArticle.title}`;

    return () => {
      window.removeEventListener("popstate", updateCurrentArticle);
    };
  }, [id]);

  return (
    <>
      <Header />
      <section className="article-banner" aria-hidden="true">
        <div className="article-banner__wrapper">
          <PictureComponent
            src={currentArticle.image}
            alt={currentArticle.imageDescription}
            width="1440"
            height="200"
            className="article-banner__img"
          />
        </div>
      </section>

      <section className="article-body">
        <div className="article-body__top">
          <a
            href="#"
            onClick={goBack}
            className="article-back"
            aria-label="go to previous page"
          >
            <img
              src={backArrow}
              className="article-back__icon"
              alt="back arrow"
              aria-hidden="true"
              width="20"
              height="9"
            />
            <p className="secondary-text">Back</p>
          </a>
          <p className="article-body__data secondary-text">
            <span className="visibility-hidden">Date of publication is</span>
            {currentArticle.data}
          </p>
        </div>
        <h1 className="article-body__title section-title">
          {currentArticle.title}
        </h1>

        {/* <div dangerouslySetInnerHTML={{ __html: currentArticle.content }} /> */}

        <div className="article-body__container">
          <h3 className="article-body__caption caption">
            Voluptate nulla amet ad commodo veniam consequat.
          </h3>
          <p className="article-body__text secondary-text">
            Id dolore mollit excepteur magna consectetur et dolore mollit qui
            quis do ea consequat tempor. Sunt eu excepteur cupidatat aliqua
            anim. Aliqua consectetur commodo magna ea proident aliquip. Minim
            ipsum irure ad irure sint cupidatat labore. <br /> Et duis cupidatat
            occaecat anim fugiat qui nulla consequat ex. Incididunt in consequat
            dolore elit ut eiusmod ipsum eiusmod labore in consectetur nisi
            voluptate pariatur. Excepteur anim dolore ex irure voluptate minim
            in deserunt ad dolore reprehenderit. Pariatur laborum tempor irure
            nisi voluptate aliqua in aliquip anim commodo esse deserunt est
            commodo. Lorem nostrud incididunt commodo enim qui incididunt ipsum.
            <br />
            Nostrud veniam do nostrud commodo velit incididunt culpa.
            Adipisicing commodo amet ea qui id aliqua. Cupidatat veniam enim
            sunt elit elit aute adipisicing voluptate consequat esse et
            consectetur magna incididunt. Sunt sint reprehenderit esse
            reprehenderit dolor id anim cupidatat non. <br /> Anim nulla
            cupidatat irure do aliqua laboris exercitation qui exercitation et
            aliquip pariatur. Et ullamco cupidatat fugiat ex ullamco aliquip
            minim nisi amet adipisicing velit. Ex commodo ex anim amet commodo.
            Tempor eu non culpa ea id ad eu aliquip dolor in aliqua nulla.
            <br /> Enim pariatur adipisicing reprehenderit eiusmod deserunt
            laborum veniam incididunt sit ullamco cillum aute sint. Qui ex Lorem
            deserunt velit elit. Occaecat pariatur fugiat eu cillum sit nulla
            excepteur incididunt. Incididunt excepteur aliquip voluptate ut
            deserunt est enim reprehenderit ullamco ut ullamco mollit incididunt
            aute. <br />
            Adipisicing sunt sunt mollit proident consequat aliquip id
            adipisicing labore sit non. Occaecat incididunt id est eu
            reprehenderit voluptate quis amet veniam. Ea nulla ipsum mollit
            reprehenderit ullamco eiusmod nostrud velit Lorem dolor fugiat.
            Occaecat incididunt nostrud occaecat cillum esse ex id exercitation
            tempor nisi elit enim. Labore Lorem amet in reprehenderit officia
            sint minim ipsum non. <br /> Elit incididunt non nisi occaecat
            reprehenderit aute ipsum deserunt culpa aliquip officia minim.
            Adipisicing amet dolore veniam eiusmod tempor sit sint quis in sunt
            laboris dolore nulla. Id ut culpa pariatur in. <br /> Incididunt
            tempor ut dolore aute cupidatat qui enim est veniam. Irure deserunt
            adipisicing cillum nostrud occaecat cillum aute est sit. Id
            adipisicing aute esse sit aute. Cillum anim et Lorem quis ad quis
            duis ut ex eu deserunt. Irure ullamco adipisicing duis sint
            incididunt voluptate ipsum enim consectetur officia culpa elit
            adipisicing voluptate. Tempor anim deserunt ut duis qui eiusmod.
            <br />
            Sunt reprehenderit fugiat magna sit reprehenderit pariatur
            reprehenderit non irure aliqua sit irure cupidatat. Sit occaecat
            aliqua elit qui ut commodo adipisicing fugiat aliqua dolore. Enim
            proident ipsum veniam enim elit officia officia tempor sint esse
            aliquip aliqua occaecat. Duis nostrud ex consectetur ad. Enim
            pariatur ex magna incididunt enim aute dolore id tempor anim irure
            enim cupidatat. Enim dolore dolore aute duis occaecat sint.
            Voluptate voluptate eiusmod elit irure nisi incididunt laborum
            fugiat proident quis aliquip excepteur ad ut. <br /> Veniam veniam
            irure Lorem dolore sint amet dolore. Commodo esse occaecat
            consectetur do id velit tempor deserunt consectetur id ea. Do sunt
            tempor laboris sit ad. Fugiat eu est sit voluptate incididunt
            laborum et aliquip in ex cupidatat minim adipisicing. Occaecat dolor
            veniam duis anim eu deserunt cupidatat incididunt elit commodo esse
            culpa culpa aliquip
          </p>

          <div className="article-body__row">
            <PictureComponent
              src={article_1}
              alt="The image shows a yellow Ferrari sports car driving down the street."
              width="430"
              height="297"
              className="article-body__img"
            />

            <PictureComponent
              src={article_2}
              alt="The image shows a blue BMW M2 parked in a parking lot. There are white parking lines on both sides of it."
              width="430"
              height="297"
              className="article-body__img"
            />
          </div>

          <h3 className="article-body__caption caption">
            Voluptate nulla amet ad commodo veniam consequat.
          </h3>
          <p className="article-body__text secondary-text">
            Voluptate nulla amet ad commodo veniam consequat laborum tempor
            proident cupidatat aute nisi eiusmod laborum. Esse amet duis aliqua
            culpa consequat et. Laborum tempor commodo et exercitation
            consectetur aute laborum aliquip tempor nostrud nulla nisi labore.
            Tempor tempor laboris officia consectetur sint esse sit ad nostrud
            et deserunt laborum sint eu. Cillum laboris et sint reprehenderit
            deserunt. <br /> Laborum labore incididunt duis mollit est anim
            reprehenderit consectetur enim fugiat veniam deserunt eiusmod. Irure
            sunt aute cupidatat qui qui consequat amet tempor. In officia est
            velit veniam magna proident adipisicing eu non labore mollit ad anim
            ut. Sit cillum in ea qui minim commodo labore nisi irure duis. Ea do
            laborum id adipisicing et cillum occaecat est laborum eu consequat
            ad commodo.
          </p>

          <div className="article-body__img">
            <PictureComponent
              src={article_3}
              smallSrc={article_3_small}
              alt="The image shows a white Audi A5 car parked in an underground parking lot."
              width="880"
              height="496"
              className="article-body__img"
            />
          </div>

          <p className="article-body__text secondary-text">
            Voluptate nulla amet ad commodo veniam consequat laborum tempor
            proident cupidatat aute nisi eiusmod laborum. Esse amet duis aliqua
            culpa consequat et. Laborum tempor commodo et exercitation
            consectetur aute laborum aliquip tempor nostrud nulla nisi labore.
            Tempor tempor laboris officia consectetur sint esse sit ad nostrud
            et deserunt laborum sint eu. Cillum laboris et sint reprehenderit
            deserunt. <br /> Laborum labore incididunt duis mollit est anim
            reprehenderit consectetur enim fugiat veniam deserunt eiusmod. Irure
            sunt aute cupidatat qui qui consequat amet tempor. In officia est
            velit veniam magna proident adipisicing eu non labore mollit ad anim
            ut. Sit cillum in ea qui minim commodo labore nisi irure duis. Ea do
            laborum id adipisicing et cillum occaecat est laborum eu consequat
            ad commodo.
          </p>
        </div>

        <div className="article-body__container article-body__container--second">
          <h3 className="article-body__caption caption">
            Voluptate nulla amet ad commodo veniam consequat.
          </h3>
          <p className="article-body__text secondary-text">
            Voluptate nulla amet ad commodo veniam consequat laborum tempor
            proident cupidatat aute nisi eiusmod laborum. Esse amet duis aliqua
            culpa consequat et. Laborum tempor commodo et exercitation
            consectetur aute laborum aliquip tempor nostrud nulla nisi labore.
            Tempor tempor laboris officia consectetur sint esse sit ad nostrud
            et deserunt laborum sint eu. Cillum laboris et sint reprehenderit
            deserunt. <br /> Laborum labore incididunt duis mollit est anim
            reprehenderit consectetur enim fugiat veniam deserunt eiusmod. Irure
            sunt aute cupidatat qui qui consequat amet tempor. In officia est
            velit veniam magna proident adipisicing eu non labore mollit ad anim
            ut. Sit cillum in ea qui minim commodo labore nisi irure duis. Ea do
            laborum id adipisicing et cillum occaecat est laborum eu consequat
            ad commodo.
          </p>

          <div className="article-body__text-block-second">
            <h3 className="article-body__second-caption title">
              Voluptate nulla amet ad commodo veniam consequat.
            </h3>
            <p className="article-body__text secondary-text">
              Voluptate nulla amet ad commodo veniam consequat laborum tempor
              proident cupidatat aute nisi eiusmod laborum. Esse amet duis
              aliqua culpa consequat et. Laborum tempor commodo et exercitation
              consectetur aute laborum aliquip tempor nostrud nulla nisi labore.
            </p>
          </div>
          <div className="article-body__text-block-second">
            <h3 className="article-body__second-caption title">
              Voluptate nulla amet ad commodo veniam consequat.
            </h3>

            <p className="article-body__text secondary-text">
              Voluptate nulla amet ad commodo veniam consequat laborum tempor
              proident cupidatat aute nisi eiusmod laborum. Esse amet duis
              aliqua culpa consequat et. Laborum tempor commodo et exercitation
              consectetur aute laborum aliquip tempor nostrud nulla nisi labore.
            </p>
          </div>

          <div className="article-body__image-block">
            <PictureComponent
              src={article_4}
              smallSrc={article_4_small}
              alt="The picture shows a Volkswagen Polo parked on the side of the road. The car has a bright blue color that makes it stand out against the green lawn and trees."
              width="880"
              height="496"
              className="article-body__img"
            />

            <p className="article-body__image-description secondary-text">
              Voluptate nulla amet ad commodo veniam consequat laborum tempor
              proident cupidatat aute nisi eiusmod laborum.
            </p>
          </div>

          <p className="article-body__text secondary-text">
            Voluptate nulla amet ad commodo veniam consequat laborum tempor
            proident cupidatat aute nisi eiusmod laborum. Esse amet duis aliqua
            culpa consequat et. Laborum tempor commodo et exercitation
            consectetur aute laborum aliquip tempor nostrud nulla nisi labore.
            Tempor tempor laboris officia consectetur sint esse sit ad nostrud
            et deserunt laborum sint eu. Cillum laboris et sint reprehenderit
            deserunt. <br /> Laborum labore incididunt duis mollit est anim
            reprehenderit consectetur enim fugiat veniam deserunt eiusmod. Irure
            sunt aute cupidatat qui qui consequat amet tempor. In officia est
            velit veniam magna proident adipisicing eu non labore mollit ad anim
            ut. Sit cillum in ea qui minim commodo labore nisi irure duis. Ea do
            laborum id adipisicing et cillum occaecat est laborum eu consequat
            ad commodo.
          </p>
        </div>
      </section>

      <div className="article-page__interesting">
        <Interesting
          sliderNavigation={true}
          caption="You might like it"
          articles={articles}
        />
      </div>
      <Footer />
    </>
  );
}
