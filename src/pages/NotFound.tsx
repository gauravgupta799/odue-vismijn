import { Link } from "react-router-dom";
import { ActionButton } from '@/components/ActionButton';

const NotFound = () => {
  return (
    <main className="page-notFound">
      <div className="container-wide">
        <section className="flex items-center px-5 py-20 sm:px-8 lg:px-10 min-h-[100vh]">
          <div className="mx-auto w-full max-w-[1180px]">
            <div className="mx-auto max-w-[700px] text-center">
              {/* Small label */}
              <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#5b1111] sm:text-[8px]">
                PAGINA NIET GEVONDEN
              </p>

              {/* 404 */}
              <h1 className="mt-5 text-[110px] font-medium leading-[0.75] tracking-[-0.08em] text-[#2b0505] sm:text-[160px] md:text-[190px] lg:text-[220px]">
                404
              </h1>

              {/* Heading */}
              <h2 className="mx-auto mt-12 max-w-[400px] text-[24px] font-normal leading-[1.05] tracking-[-0.04em] sm:text-[30px] lg:text-[34px]">
                Deze plek konden we
                <br />
                niet vinden.
              </h2>

              {/* Description */}
              <p className="mx-auto mt-4 max-w-[400px] text-[14px] leading-[1.5] text-[#444444] ">
                De pagina die je zoekt bestaat niet meer, is verplaatst of
                misschien heb je een verkeerde link gebruikt.
              </p>

              {/* CTA */}
              <div className="mt-8 flex justify-center">
                <Link
                  to="/"
                  className="group flex items-center gap-[4px]"
                >
                  <ActionButton>
                    Terug naar home
                  </ActionButton>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default NotFound;