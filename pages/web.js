import useWindowSize from "../components/windowSize";
import MainLayout from "../components/mainLayout";
import Image from "next/image";
import Head from "next/head";

const WebDesktop = () => {
  return (
    <MainLayout>
      <Head>
        <title>Rhys | Web Design</title>
        <meta name="description" content="Web designers based in Cape Town" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Rhys" />
        <meta
          property="og:description"
          content="We can meet all your web design needs!"
        />
        <meta property="og:url" content="https://rhys.co.za/web" />
        <meta property="og:type" content="website" />
      </Head>
      <div
        style={{
          height: 600,
          marginTop: -160,
          width: "100%",
          backgroundImage: "url(./wave1.jpg)",
          backgroundSize: "cover",
          // zIndex: -100,
        }}
      ></div>
      <div
        style={{
          // minHeight: 600,
          paddingBottom: 100,
          width: "100%",
          backgroundColor: "#81b29a",
        }}
      >
        <div>
          <a
            style={{
              color: "#81b29a",
              fontSize: 120,
              fontWeight: 100,
              zIndex: 100,
              position: "relative",
              top: -120,
              paddingLeft: 40,
            }}
          >
            Web Design
          </a>
        </div>
        <div
          style={{
            width: "100%",
            paddingLeft: 250,
            paddingRight: 250,
            marginTop: -50,
          }}
        >
          <p style={{ textAlign: "center", color: "white", fontSize: 20 }}>
            At Rhys our main focus is web design. We build our sites from
            scratch, meaning we don’t use Wordpress, Wix or any other similar
            programs. In order to make sure our sites are as efficient,
            customisable and fast as possible, we build them from scratch. We
            use frameworks called React.js and Next.js, which are both very
            modern technologies. Because we use these frameworks we can also
            build custom web apps. For example, we can make complex booking
            systems or staff management websites.
            <br />
            <br />
            Modernise your business with us. A beautiful website is essential to
            any business’s success. At Rhys you will get the best website
            possible for the best price possible. Nothing is impossible, we can
            make your site with advanced animations, make you a complete web
            app, or just make you a simple static site.
            <br />
            <br />
            OUR PROCESS: Firstly we will make a mockup of your website using
            Adobe XD. This allows us to present you a design of the site which
            takes minimal effort to change. Once the design has been approved,
            we will start coding your site. Once this has been completed, we
            will push your site to your domain.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

const WebMobile = () => {
  return (
    <MainLayout>
      <Head>
        <title>Rhys | Web Design</title>
        <meta name="description" content="Web designers based in Cape Town" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Rhys" />
        <meta
          property="og:description"
          content="We can meet all your web design needs!"
        />
        <meta property="og:url" content="https://rhys.co.za/web" />
        <meta property="og:type" content="website" />
      </Head>
      <div
        style={{
          minHeight: 600,
          marginTop: -160,
          width: "100%",
          backgroundImage: "url(./wave1.jpg)",
          backgroundSize: "cover",
        }}
      >
        {/* <Image src="/wave1.jpg" layout="fill" alt="wave" objectFit="cover" /> */}
      </div>
      <div
        style={{
          // minHeight: 600,
          paddingBottom: 100,
          width: "100%",
          backgroundColor: "#81b29a",
        }}
      >
        <div>
          <a
            style={{
              color: "#81b29a",
              fontSize: 70,
              fontWeight: 100,
              zIndex: 100,
              position: "relative",
              top: -70,
              paddingLeft: 40,
            }}
          >
            Web Design
          </a>
        </div>
        <div
          style={{
            width: "100%",
            paddingLeft: 50,
            paddingRight: 50,
            marginTop: -50,
          }}
        >
          <p style={{ textAlign: "center", color: "white", fontSize: 20 }}>
            At Rhys our main focus is web design. We build our sites from
            scratch, meaning we don’t use Wordpress, Wix or any other similar
            programs. In order to make sure our sites are as efficient,
            customisable and fast as possible, we build them from scratch. We
            use frameworks called React.js and Next.js, which are both very
            modern technologies. Because we use these frameworks we can also
            build custom web apps. For example, we can make complex booking
            systems or staff management websites.
            <br />
            <br />
            Modernise your business with us. A beautiful website is essential to
            any business’s success. At Rhys you will get the best website
            possible for the best price possible. Nothing is impossible, we can
            make your site with advanced animations, make you a complete web
            app, or just make you a simple static site.
            <br />
            <br />
            OUR PROCESS: Firstly we will make a mockup of your website using
            Adobe XD. This allows us to present you a design of the site which
            takes minimal effort to change. Once the design has been approved,
            we will start coding your site. Once this has been completed, we
            will push your site to your domain.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

const Web = () => {
  const size = useWindowSize();
  return <div>{size.width > 1100 ? <WebDesktop /> : <WebMobile />}</div>;
};

export default Web;
