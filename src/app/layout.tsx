import type { Metadata } from "next";




export const metadata: Metadata = {
  title: "Apashemi School Management Dashboard",
  description: "Apashemi GoniSaimas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
         
      test  {children}</body>
    </html>
  );
}
