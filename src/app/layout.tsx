import type { Metadata } from "next";
import { Inter } from "next/font/google";

import RootLayout from "@/layouts/root";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orkes Test Project",
  description: "Developed by Federico De Marines",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Orkes Test Project</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
