import { Inter } from "next/font/google";
import "./globals.css";
import ConvexProviderWithClerk from "./providers/ConvexProviderWithClerk";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Podcastr",
  description: "Generate your podcasts using AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link href="/icons/logo.svg" rel="icon" sizes="any" />
      <body className={inter.className}>
        <ConvexProviderWithClerk>
          {children}
        </ConvexProviderWithClerk>
      </body>
    </html>
  );
}
