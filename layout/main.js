import Head from "next/head";

export default ({ children }) => (
  <div id="page">
    <Head>
      <title>Tony's portfolio</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:300,400,600,700"
        rel="stylesheet"
      />
    </Head>

    {children}

    <script
      src="https://code.jquery.com/jquery-3.3.1.min.js"
      crossOrigin="anonymous"
    />
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
      crossOrigin="anonymous"
    />
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"
      crossOrigin="anonymous"
    />

    <style jsx>{`
      // #page {
      //   max-width: 1400px;
      //   margin: 0 auto;
      // }
    `}</style>
  </div>
);
