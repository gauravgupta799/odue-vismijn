import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import heroImage from "@/assets/blogImages/blog-hero.webp";
import contentImage from "@/assets/blogImages/blog-content-1.webp";
import authorImage from "@/assets/blogImages/author.webp";

const BlogDetail = () => {
  return (
    <article className="blog-article">
        <div className="container-wide">

            {/* Header */}
            <section className="px-5 pb-10 pt-16 sm:px-8 sm:pt-20 lg:px-0 lg:pb-12 lg:pt-[72px]">
                <div className="mx-auto max-w-[1400px]">
                    <div className="mx-auto max-w-[500px]">
                        <h1 className="text-[32px] leading-[1.05] tracking-[-0.04em] sm:text-[34px] md:text-[36px] lg:text-[40px] xl:text-[44px]">
                            Waarom Een Goede Plek
                            Meer Doet Dan Alleen
                            Ruimte Bieden
                        </h1>

                        {/* Author */}
                        <div className="mt-4 flex items-center gap-2">
                            <div className="h-[80px] w-[80px] overflow-hidden rounded-full">
                                <img
                                src={authorImage}
                                alt="Bert"
                                className="h-full w-full object-cover"
                                />
                            </div>

                            <div>
                                <p className="text-[14px] text-[#444444]">
                                    Geschreven door Bert
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hero image + Data */}
            <section className="px-5 sm:px-8 lg:px-0">
                <div className="mx-auto max-w-[330px] sm:max-w-[520px] lg:max-w-[445px]">
                    <p className="mb-2 text-[6px] text-[#333333]">
                        Datum: 11 Augustus 2026
                    </p>

                    <div className="overflow-hidden">
                        <img
                        src={heroImage}
                        alt="Waarom een goede plek meer doet"
                        className="aspect-[1.5] w-full object-cover"
                        />
                    </div>
                </div>
            </section>

        </div>


      {/* =====================================================
          ARTICLE
      ===================================================== */}
      <article className="px-5 sm:px-8 lg:px-0">
        <div className="mx-auto max-w-[330px] sm:max-w-[520px]">
          {/* Intro */}
          <ArticleText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo
            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet.
          </ArticleText>

          <ArticleText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo
            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est.
          </ArticleText>

          <ArticleText>
            Lorem amet ipsum dolor sit amet, consectetur adipiscing elit, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum.
          </ArticleText>

          <ArticleText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo
            dolores et ea rebum.
          </ArticleText>

          <ArticleText>
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed diam.
          </ArticleText>

          {/* =================================================
              SECTION 01
          ================================================= */}
          <section className="mt-20 sm:mt-24">
            <h2 className="text-[14px] font-medium tracking-[-0.02em] sm:text-[16px]">
              Ruimte Om Vooruit Te Gaan
            </h2>

            <ArticleText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </ArticleText>

            <ArticleText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </ArticleText>
          </section>

          {/* =================================================
              SECTION 02
          ================================================= */}
          <section className="mt-20 sm:mt-24">
            <h2 className="text-[14px] font-medium tracking-[-0.02em] sm:text-[16px]">
              Van Idee Naar Eerste Stap
            </h2>

            <div className="mt-5 overflow-hidden">
              <img
                src={contentImage}
                alt="Mensen werken samen"
                className="aspect-[1.5] w-full object-cover"
              />
            </div>

            <ArticleText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </ArticleText>

            <ArticleText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </ArticleText>
          </section>

          {/* =================================================
              AUTHOR
          ================================================= */}
          <section className="mt-14 border-t border-[#d6d4ce] pt-9 sm:mt-16 sm:pt-10">
            <div className="flex items-center gap-4">
              <div className="h-[80px] w-[80px] shrink-0 overflow-hidden rounded-full">
                <img
                  src={authorImage}
                  alt="Bert"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <p className="text-[16px] font-medium">
                  Bert — Founder, Oude Vismijn 1
                </p>

                <p className="mt-1 max-w-[360px] text-[12px] leading-[1.4] text-[#555555]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus lacinia odio vitae vestibulum.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>

      {/* =====================================================
          RELATED ARTICLES
      ===================================================== */}
      <section className="px-5 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28 lg:px-0 lg:pt-[110px]">
        <div className="mx-auto max-w-[1180px] ">
          <h2 className="text-[26px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[48px] tracking-[-0.36px]">
            Gerelateerde artikelen
          </h2>

          <div className="mt-9 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            <RelatedArticleCard
              image={heroImage}
              date="JUNE 2025"
              title="Podcast Vismijn — nieuwe episode live"
            />

            <RelatedArticleCard
              image={heroImage}
              date="JUNE 2025"
              title="Podcast Vismijn — nieuwe episode live"
            />

            <RelatedArticleCard
              image={heroImage}
              date="JUNE 2025"
              title="Welkom — een nieuwe starter is arrived"
            />
          </div>
        </div>
      </section>
    </article>
  );
};

/* ==========================================================
   ARTICLE TEXT
========================================================== */

interface ArticleTextProps {
  children: ReactNode;
}

const ArticleText = ({ children }: ArticleTextProps) => {
  return (
    <p className="mt-7 text-[16px] leading-[1.55] text-[#222222] lg:text-[18px]">
      {children}
    </p>
  );
};

/* ==========================================================
   RELATED ARTICLE CARD
========================================================== */

interface RelatedArticleCardProps {
  image: string;
  date: string;
  title: string;
}

const RelatedArticleCard = ({
  image,
  date,
  title,
}: RelatedArticleCardProps) => {
  return (
    <article className="group">
      <NavLink to="/bloggendetail" className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="aspect-[1.5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </NavLink>

    <p className="mt-4 text-xs leading-6">
        {date}
    </p>
    <p className="mt-1 text-[16px] md:text-xl font-normal leading:4 md:leading-6">
        <NavLink to="/bloggendetail" className="hover:text-black underline">
            {title}
        </NavLink>
    </p>
    </article>
  );
};

export default BlogDetail;