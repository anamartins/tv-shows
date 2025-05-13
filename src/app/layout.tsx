import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "TV Shows",
  description: "See your favorite TV shows here!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <ul>
            <li>
              <Link href="/">
                <Image
                  src="/tv-icon.svg"
                  width={100}
                  height={100}
                  alt="tv icon"
                />
              </Link>
            </li>
          </ul>
        </header>
        {children}
        <footer>
          <a href="https://github.com/anamartins/tv-shows" target="_blank">
            ✨ Check this on Github ✨
          </a>
        </footer>
      </body>
    </html>
  );
}
