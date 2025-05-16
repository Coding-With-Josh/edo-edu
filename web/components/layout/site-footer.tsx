import * as React from "react";
import Link from "next/link";
import { footerLinks, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { Icons } from "../shared/icons";
import { Facebook, Instagram, School } from "lucide-react";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("border-t bg-amber-50 dark:bg-gray-900", className)}>
      <div className="container grid max-w-6xl grid-cols-2 gap-8 py-12 md:grid-cols-4">
        {[
          {
            title: "Quick Links",
            items: [
              { title: "Edo State Ministry of Education", href: "https://edostate.gov.ng/education" },
              { title: "School Portal Login", href: "/login" },
              { title: "Academic Calendar", href: "/calendar" },
              { title: "Help Center", href: "/help" },
            ],
          },
          {
            title: "Resources",
            items: [
              { title: "E-Learning Platform", href: "/elearning" },
              { title: "Teacher Training", href: "/training" },
              { title: "Curriculum Guides", href: "/curriculum" },
              { title: "Educational Policies", href: "/policies" },
            ],
          },
          {
            title: "Administration",
            items: [
              { title: "Staff Portal", href: "/staff" },
              { title: "School Statistics", href: "/statistics" },
              { title: "Reporting Tools", href: "/reports" },
              { title: "System Documentation", href: "/docs" },
            ],
          },
          {
            title: "Government",
            items: [
              { title: "Edo State Government", href: "https://edostate.gov.ng" },
              { title: "Contact Ministry", href: "/contact" },
              { title: "Feedback Form", href: "/feedback" },
              { title: "Whistleblower Portal", href: "/whistleblower" },
            ],
          },
        ].map((section) => (
          <div key={section.title}>
            <h3 className="text-sm font-bold text-foreground">
              {section.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {section.items?.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-amber-600 dark:hover:text-amber-400"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t py-6">
        <div className="container flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-4">
            <School className="h-8 w-8 text-amber-600 dark:text-amber-400" />
            <div>
              <p className="text-sm font-medium text-foreground">
                Edo State Unified School Management System
              </p>
              <p className="text-xs text-muted-foreground">
                An initiative of Edo State Ministry of Education
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="https://edostate.gov.ng"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground hover:text-amber-600 dark:hover:text-amber-400"
            >
              Official State Website
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-amber-600 dark:hover:text-amber-400"
            >
              Privacy Policy
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-amber-600 dark:hover:text-amber-400"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t py-4">
        <div className="container flex max-w-6xl flex-col items-center justify-between gap-3 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Edo State Government. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p>Follow us:</p>
            <div className="flex gap-3">
              <Link
                href="https://facebook.com/edostategov"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/edostategov"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <Icons.twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com/edostategov"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}