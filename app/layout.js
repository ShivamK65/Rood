import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "@/context/AuthContext";
import Head from "@/head";
import Logout from "@/components/Logout";

const opensans = Open_Sans({ subsets: ["latin"] });
const fugaz = Fugaz_One({ subsets: ["latin"],weight:['400'] });

export const metadata = {
  title: "ROOD",
  description: "Track Your Daily Mood, Every day Of The Year",
};

export default function RootLayout({ children }) {
  const header =<header className="p-4 sm:p-8 flex item-center justify-between gap-4">
    <Link href={'/'}>
      <h1 className={'text-base sm:text-lg textGradinat '+fugaz.className}>Rood</h1>
    </Link>
    <Logout />

  </header>

  const footer= <footer className="p-4 sm:p-8 grid place-items-center">
    <p className={'text-indigo-500 '+ fugaz.className}>Create with 💚</p>
  </footer>
  return (
    <html lang="en">
      <Head />
      <AuthProvider>
      <body className={'w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-700' + opensans.className}>
        {header}
        {children}
        {footer}
      </body>
      </AuthProvider>
    </html> 
  );
}
