import "../styles/globals.css";
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";

import { UserProvider } from '@auth0/nextjs-auth0/client'

function MyApp(props) {
  const { Component, pageProps } = props;
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <UserProvider>
      <Layout>
      
        <Component {...pageProps} />
          
      </Layout>
      </UserProvider>
    </ThemeProvider>
  );
}

export default MyApp;
