import "./globals.css";
import Nav  from "../component/nav";
import MuiThemeProvider from '@/mui-theme-provider';
import React from "react";

// import Loader from "@/component/loader";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          <link rel="icon" type="image/png" href="/icon.png" />
          <title>E-commerce Store</title>
      </head>
      <body>
          <Nav  />

          <MuiThemeProvider>{children}</MuiThemeProvider>
          {/* <Loader /> */}

      </body>
    </html>
  );
}
