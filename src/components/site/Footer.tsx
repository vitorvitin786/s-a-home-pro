import { BrandLogo } from "./BrandLogo";
import { site } from "@/lib/site";
export function Footer() {
  return (
    <footer className="lux-footer">
      <div className="container-x footer-grid">
        <div>
          <BrandLogo className="footer-logo" />
          <p>Elevating homes and businesses with craftsmanship that lasts.</p>
        </div>
        <div>
          <h3>Explore</h3>
          <a href="/">Home</a>
          <a href="/#services">Services</a>
          <a href="/portfolio">Our Work</a>
          <a href="/about">About</a>
        </div>
        <div>
          <h3>Service Area</h3>
          <p>
            Jacksonville
            <br />
            Northeast Florida
          </p>
          <p>Residential &amp; Commercial</p>
        </div>
        <div>
          <h3>Start Your Project</h3>
          <a href={site.telHref}>{site.phoneDisplay}</a>
          <a href={site.mailHref}>{site.email}</a>
          <a className="footer-button" href="/#estimate">
            Free Estimate
          </a>
        </div>
      </div>
      <div className="container-x footer-bottom">
        <span>© {new Date().getFullYear()} S&amp;A Homes Services LLC</span>
        <span>Tile • Flooring • Remodeling</span>
      </div>
    </footer>
  );
}
