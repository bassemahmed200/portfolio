import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Bassem Ahmed | Full Stack Developer & Website Builder",
  description:
    "Bassem Ahmed is an expert Full Stack Developer specializing in building high-performance websites, web applications, SaaS platforms, and e-commerce solutions.",
  keywords: [
    "full stack developer",
    "website developer",
    "web developer for hire",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "UI UX designer",
    "SaaS developer",
    "freelance web developer",
    "Bassem Ahmed",
  ],
  authors: [{ name: "Bassem Ahmed" }],
  openGraph: {
    title: "Bassem Ahmed | Full Stack Developer & Website Builder",
    description:
      "Expert Full Stack Developer building stunning websites, scalable web apps, and SaaS platforms.",
    url: "https://bassemahmed.dev",
    siteName: "Bassem Ahmed",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bassem Ahmed | Full Stack Developer & Website Builder",
    description:
      "Expert Full Stack Developer building stunning websites, scalable web apps, and SaaS platforms.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen bg-[#000000] text-white antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
