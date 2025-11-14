import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-black mb-4">
              Houston<span className="text-accent">Strategy</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Texas SB 6 data center permitting specialists with 20+ years Houston government experience. 
              Your inside edge on commercial and residential permits.
            </p>
            <div className="space-y-2 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Houston, Texas</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+15551234567" className="hover:text-accent transition-colors">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:info@houstonstrategy.net" className="hover:text-accent transition-colors">
                  info@houstonstrategy.net
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#data-centers" className="hover:text-accent transition-colors">
                  SB 6 Data Centers
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Commercial Permitting
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Residential Projects
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-accent transition-colors">
                  Our Process
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#team" className="hover:text-accent transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-accent transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <Link to="/book" className="hover:text-accent transition-colors">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>© 2025 Houston Strategy. All rights reserved. SB 6 Permitting Specialists.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
