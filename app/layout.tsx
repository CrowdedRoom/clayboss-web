import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clay Boss — AI Pottery Guides",
  description:
    "Turn any pottery idea into a step-by-step AI guide. Techniques, tools, clay types, firing temps, and glaze tips — made for potters of every level.",
  openGraph: {
    title: "Clay Boss — AI Pottery Guides",
    description: "Turn any pottery idea into a step-by-step AI guide.",
    url: "https://clayboss.app",
    siteName: "Clay Boss",
    images: [
      {
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663325853989/NfJBLisxwhqoAveH.png",
        width: 1024,
        height: 1024,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#fdf6ec] text-stone-900 antialiased">{children}</body>
    </html>
  );
}
