"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Mail,
  ShieldCheck,
  FileText,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo/logo.webp"
                alt="VIPA App Studio"
                width={180}
                height={60}
                className="h-14 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 text-sm leading-7 text-slate-600">
                VIPA App Studio creates AI-powered Android applications for photo editing,
                creativity, and digital imaging. Our apps are trusted by millions of users
                worldwide.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <Link href="/" className="transition-colors duration-200 hover:text-blue-600">
                  Home
                </Link>
              </li>

                <li>
                    <Link href="/apps" className="transition-colors duration-200 hover:text-blue-600">
                    Apps
                    </Link>
                </li>

              <li>
                <Link href="/privacy" className="transition-colors duration-200 hover:text-blue-600">
                  Privacy
                </Link>
              </li>

              <li>
                <Link href="/about" className="transition-colors duration-200 hover:text-blue-600">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact" className="transition-colors duration-200 hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900">
              Support
            </h3>

            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <Link
                  href="/support"
                  className="inline-flex items-center hover:text-blue-600"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Support
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="inline-flex items-center hover:text-blue-600"
                >
                  <ShieldCheck className="mr-2 h-4 w-4" />
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="inline-flex items-center hover:text-blue-600"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Google Play */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900">
              Download
            </h3>

            <p className="mb-5 text-sm leading-7 text-slate-600">
              Explore our collection of AI-powered Android applications
              available on Google Play.
            </p>

            <a
              href="https://play.google.com/store/apps/developer?id=Vipa+App+Studio&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Visit Google Play
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row">
          <p>
            © {year} VIPA App Studio. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors duration-200 hover:text-blue-600">
              Privacy
            </Link>

            <Link href="/terms" className="transition-colors duration-200 hover:text-blue-600">
              Terms
            </Link>

            <Link href="/support" className="transition-colors duration-200 hover:text-blue-600">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}