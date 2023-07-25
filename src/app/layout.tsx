import "./globals.scss";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import AppContextProvider  from "../components/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <AppContextProvider>
        {children}

        </AppContextProvider>
      </body>
    </html>
  );
}
