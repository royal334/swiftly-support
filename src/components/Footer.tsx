import { Globe, Mail, MessageSquare, Send } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Info */}
          <div className="space-y-6 md:col-span-2">
            <a href="#" className="flex items-center space-x-2">
              <img src="/image.png" alt=""  className="w-10 h-10 rounded-xl" />
              <span className="text-2xl font-bold font-display tracking-tight">
                Swiftly
              </span>
            </a>
            <p className="text-muted-foreground text-lg max-w-sm">
              Connecting elite businesses with world-class virtual talent.
              Efficiency, simplified.
            </p>
            <div className="flex items-center space-x-4">
              {[Globe, Mail, MessageSquare, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full bg-white/5 hover:bg-brand-primary/10 hover:text-brand-primary transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Company</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <a
                  href="#"
                  className="hover:text-brand-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-primary transition-colors"
                >
                  Carrers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-primary transition-colors"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-primary transition-colors"
                >
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Support</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <a
                  href="#"
                  className="hover:text-brand-primary transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-primary transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-primary transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-sm text-muted-foreground font-medium">
          <p>© 2026 Swiftly Staffing Agency. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-brand-primary transition-colors">
              Cookies
            </a>
            <a href="#" className="hover:text-brand-primary transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
