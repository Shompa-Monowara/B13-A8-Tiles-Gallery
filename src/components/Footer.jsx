"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook, FaInstagram, FaLinkedin, FaTwitter,
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,
} from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "All Tiles", href: "#" },
  { label: "Collections", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Blog", href: "#" },
];

const collectionLinks = [
  { label: "Marble Series", href: "#" },
  { label: "Geometric Patterns", href: "#" },
  { label: "Stone Finish", href: "#" },
  { label: "Wood Effect", href: "#" },
  { label: "Premium Line", href: "#" },
];

const socials = [
  { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

const FooterColumn = ({ label, children }) => (
  <div>
    <p className="text-[10px] font-semibold tracking-[0.28em] uppercase text-[#D5B471] mb-5">
      {label}
      <span className="block w-5 h-px bg-[rgba(213,180,113,0.35)] mt-2" />
    </p>
    {children}
  </div>
);

const FooterLink = ({ href, children }) => (
  <Link
    href={href}
    className="group flex items-center text-[13px] font-light tracking-[0.04em] text-white/40 hover:text-[#f5f0e8] transition-colors duration-200"
  >
    <span className="inline-block w-0 h-px bg-[#D5B471] mr-0 group-hover:w-3.5 group-hover:mr-1.5 transition-all duration-250 align-middle" />
    {children}
  </Link>
);

const Footer = () => {
  return (
    <footer
      className="mt-24 relative font-sans"
      style={{ background: "#111009", color: "#fff" }}
    >
      
      <div
        className="h-px w-full"
        style={{ background: "linear-gradient(to right, transparent, rgba(213,180,113,0.25), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 py-14">
       
        <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr_1fr_1fr] gap-12 pb-12">

          
          <div>
            <Link href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 border border-[rgba(213,180,113,0.3)] flex items-center justify-center flex-shrink-0">
                <Image src="/loader.svg" alt="Logo" width={20} height={20} className="object-contain" />
              </div>
              <span
                className="text-[22px] font-light tracking-[0.12em] uppercase text-[#f5f0e8] font-serif"
              >
                Tiles<span className="text-[#D5B471]">Gallery</span>
              </span>
            </Link>

            <p className="text-[13px] font-light leading-[1.85] text-white/40 tracking-[0.03em] max-w-[280px] mb-6">
              Discover and showcase premium tiles with cinematic elegance. Built for luxury, quality, and seamless aesthetics.
            </p>

            
            <div className="flex gap-2.5">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[34px] h-[34px] border border-white/10 flex items-center justify-center text-white/35 hover:border-[rgba(213,180,113,0.5)] hover:text-[#D5B471] hover:bg-[rgba(213,180,113,0.06)] transition-all duration-200"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

         
          <FooterColumn label="Navigate">
            <div className="flex flex-col gap-3">
              {navLinks.map((l) => <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>)}
            </div>
          </FooterColumn>

          
          <FooterColumn label="Collections">
            <div className="flex flex-col gap-3">
              {collectionLinks.map((l) => <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>)}
            </div>
          </FooterColumn>

        
          <FooterColumn label="Contact">
            <div className="flex flex-col gap-4">
              {[
                { icon: FaMapMarkerAlt, content: "Dhaka, Bangladesh", href: "https://maps.google.com" },
                { icon: FaPhoneAlt, content: "+880 1234-567890", href: "tel:+8801234567890" },
                { icon: FaEnvelope, content: "support@tilesgallery.com", href: "mailto:support@tilesgallery.com" },
              ].map(({ icon: Icon, content, href }) => (
                <div key={content} className="flex items-start gap-3">
                  <div className="w-7 h-7 border border-[rgba(213,180,113,0.2)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={11} className="text-[#D5B471] opacity-70" />
                  </div>
                  {href ? (
                    <a href={href} className="text-[12px] font-light text-white/40 hover:text-[#D5B471] transition-colors duration-200 leading-relaxed">
                      {content}
                    </a>
                  ) : (
                    <span className="text-[12px] font-light text-white/40 leading-relaxed">{content}</span>
                  )}
                </div>
              ))}
            </div>
          </FooterColumn>
        </div>

     
        <div
          className="h-px w-full mb-6"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }}
        />

        
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[11px] font-light tracking-[0.08em] text-white/20">
            © {new Date().getFullYear()} <span className="text-[rgba(213,180,113,0.45)]">TilesGallery</span> — All rights reserved.
          </p>
          <div className="flex gap-6">
            {[{ label: "Privacy Policy", href: "#" }, { label: "Terms of Use", href: "#" }].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-[11px] font-light tracking-[0.12em] uppercase text-white/20 hover:text-[rgba(213,180,113,0.65)] transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;