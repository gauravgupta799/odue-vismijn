import { ActionButton } from '@/components/ActionButton';
import footerLogo from "@/assets/oude-footer-logo.svg"

const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Fusce vehicula, justo';

const navigationLinks = ['Home', 'About', 'Services'];
const otherLinks = ['Offering', 'Resources', 'News & Updates'];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <div className="container-wide relative px-8 sm:px-20 lg:px-[203px] py-12 lg:pt-[111px]">
        <div className="reveal grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-0">
          <div className="lg:col-span-6">
            <h2 className="max-w-[360px] pl-0 text-[30px] font-medium leading-[34px] tracking-[-0.36px] sm:text-4xl sm:leading-[44px]">         
              <span className="lg:pl-[52px] xl:pl-[60px]">There is still a </span><br />
              <span className=""> room for you too</span>
            </h2>
            <p className="mt-2 max-w-[427px] text-sm leading-4">
              {description}
            </p>
            <div className="mt-8">
              <ActionButton dark>BE A PART</ActionButton>
            </div>
          </div>

          <div className="flex justify-lg-end lg:col-span-6">
            <img src={footerLogo} alt="footer-logo" className=""/>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 border-t border-cream/20 lg:mt-[84px] lg:grid-cols-3">
          <section className="border-b border-cream/20 py-12 lg:border-b-0 lg:border-r lg:pr-20">
            <h3 className="text-sm font-normal leading-4 opacity-40">
              Navigation
            </h3>
            <ul className="mt-8 space-y-1 text-xl font-semibold leading-[44px]">
              {navigationLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="transition-opacity hover:opacity-60"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="border-b border-cream/20 py-12 lg:border-b-0 lg:border-r lg:px-20">
            <h3 className="text-sm font-normal leading-4 opacity-40">
              Other Links
            </h3>
            <ul className="mt-8 space-y-1 text-xl font-medium leading-[44px]">
              {otherLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#home"
                    className="transition-opacity hover:opacity-60"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="py-12 lg:pl-20">
            <h3 className="text-sm font-normal leading-4 opacity-40">
              Connect
            </h3>
            <div className="mt-8 not-italic text-xl font-medium leading-[44px]">
              <a
                href="mailto:info@oudevismijn1.be"
                className="transition-opacity hover:opacity-60"
                target="_blank"
              >
                info@oudevismijn1.be
              </a>
              <address className="not-italic leading-[32px] mt-2">
                Oude Vismijn 1 Lokeren, Belgium
              </address>
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-3 border-t border-cream/20 pt-10 text-xs leading-6 lg:flex-row lg:items-center lg:justify-between">
          <p>© 2026 Oude Vismijn 1 — Lokeren</p>
          <p>Facebook | Instagram | Linkedin</p>
          <p>A place that makes sense</p>
        </div>
      </div>
    </footer>
  );
}
