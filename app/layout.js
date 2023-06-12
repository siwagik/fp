export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>FantasticPower</title>
        <meta property="og:title" content="FantasticPower" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fantasticpower.vercel.app/" />
        <meta property="og:image" content="https://fantasticpower.vercel.app/cringe.jpg" />
        <meta property="og:description" content="Site description" />
      </Head>
      {children}
    </>
  );
}