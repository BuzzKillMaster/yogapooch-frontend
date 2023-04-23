import '@/styles/globals.css'
import {ReactNode} from "react";
import {Lexend} from "next/font/google";

export const metadata = {
  title: "Hydrovertic",
}

const lexend = Lexend({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={lexend.className}>{children}</body>
    </html>
  )
}
