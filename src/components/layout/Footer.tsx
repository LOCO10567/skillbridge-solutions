import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  diensten: [
    { name: "Aanbouw of opbouw", href: "/diensten#aanbouw" },
    { name: "Dakkapel plaatsen", href: "/diensten#dakkapel" },
    { name: "Renovatie", href: "/diensten#renovatie" },
    { name: "Badkamer", href: "/diensten#badkamer" },
    { name: "Nieuwbouw", href: "/diensten#nieuwbouw" },
  ],
  bedrijf: [
    { name: "Over ons", href: "/over-ons" },
    { name: "Projecten", href: "/projecten" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Contact */}
          <div className="space-y-6">
            <img src={logo} alt="SkillBridge Bouwservices" className="h-12 w-auto brightness-0 invert" />
            <p className="text-primary-foreground/80 text-sm">
              Verbouwen met zekerheid. Van aanbouw tot complete renovatie met heldere afspraken en vakwerk.
            </p>
            <div className="space-y-3">
              <a href="tel:+31612345678" className="flex items-center gap-3 text-sm hover:text-accent transition-colors">
                <Phone className="h-4 w-4 text-accent" />
                06 - 1234 5678
              </a>
              <a href="mailto:info@skillbridge.nl" className="flex items-center gap-3 text-sm hover:text-accent transition-colors">
                <Mail className="h-4 w-4 text-accent" />
                info@skillbridge.nl
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span>[Regio], Nederland</span>
              </div>
            </div>
          </div>

          {/* Diensten */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Diensten</h4>
            <ul className="space-y-3">
              {footerLinks.diensten.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bedrijf */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Bedrijf</h4>
            <ul className="space-y-3">
              {footerLinks.bedrijf.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Werkgebied */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Werkgebied</h4>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Wij werken in [Regio] en omstreken, waaronder:
            </p>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Regio Zuid-Holland</li>
              <li>Regio Utrecht</li>
              <li>Regie Gedeelte Noord-Brabant</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} SkillBridge Bouwservices. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
              Privacy
            </Link>
            <Link to="/voorwaarden" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
              Voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
