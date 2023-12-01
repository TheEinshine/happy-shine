import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shine Test",
  description: "Shine Test",
};
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
