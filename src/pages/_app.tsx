import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={open_sans.className}>
      <Component {...pageProps} />
    </main>
  );
}
