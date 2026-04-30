import Link from "next/link";
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaTwitter, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mt-24 bg-[#2A3C50] text-white">
      <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

     
      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
      />

      
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
          {/* Brand */}
          <div className="flex-1 max-w-sm space-y-4">
            <Link href="/" className="flex items-center group">
              <h3 className="font-black text-xl tracking-wider uppercase text-white">
                Tiles<span className="text-[#38BDF8] font-light">Gallery</span>
              </h3>
            </Link>

            <p className="text-sm leading-relaxed text-gray-300">
              Discover and showcase premium, modern tiles with cinematic elegance. Built for luxury, quality, and seamless aesthetics.
            </p>
          </div>

          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-wider ">
              Social Links
            </h3>
            <div className="flex items-center gap-5 text-lg text-gray-400">
              <Link 
                href="https://facebook.com" 
                aria-label="Facebook" 
                className="hover:text-[#38BDF8] transition-colors"
              >
                <FaFacebook />
              </Link>
              <Link 
                href="https://instagram.com" 
                aria-label="Instagram" 
                className="hover:text-[#38BDF8] transition-colors"
              >
                <FaInstagram />
              </Link>
              <Link 
                href="https://twitter.com" 
                aria-label="Twitter" 
                className="hover:text-[#38BDF8] transition-colors"
              >
                <FaTwitter />
              </Link>
              <Link 
                href="https://linkedin.com" 
                aria-label="LinkedIn" 
                className="hover:text-[#38BDF8] transition-colors"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>

          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-wider ">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#38BDF8] flex-shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#38BDF8] flex-shrink-0" />
                <a href="tel:+880123456789" className="hover:text-white transition-colors">
                  +880 1234-567890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#38BDF8] flex-shrink-0" />
                <a href="mailto:support@pixgen.com" className="hover:text-white transition-colors">
                  support@tilesgallery.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

        
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} TilesGallery. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;