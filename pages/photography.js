import useWindowSize from "../components/windowSize";
import MainLayout from "../components/mainLayout";
import Image from "next/image";
import Head from "next/head";

const PhotographyDesktop = () => {
  return (
    <MainLayout>
      <Head>
        <title>Rhys | Photography</title>
        <meta name="description" content="Photographers based in Cape Town" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Rhys" />
        <meta
          property="og:description"
          content="We can meet all your photography needs!"
        />
        <meta property="og:url" content="https://rhys.co.za/photography" />
        <meta property="og:type" content="website" />
      </Head>
      <div
        style={{
          height: 600,
          marginTop: -160,
          width: "100%",
          backgroundImage: "url(./beach2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <Image src="/beach2.jpg" alt="beach" layout="fill" objectFit="cover" /> */}
      </div>
      <div
        style={{
          // minHeight: 600,
          paddingBottom: 100,
          width: "100%",
          backgroundColor: "#e07a5f",
          // border: "1px solid red"
        }}
      >
        <div>
          <a
            style={{
              color: "#e07a5f",
              fontSize: 120,
              fontWeight: 100,
              zIndex: 100,
              position: "relative",
              top: -120,
              paddingLeft: 40,
            }}
          >
            Photography
          </a>
        </div>
        <div
          style={{
            width: "100%",
            paddingLeft: 250,
            paddingRight: 250,
            marginTop: -50,
            // border: "1px solid red"
          }}
        >
          <p style={{ textAlign: "center", color: "white", fontSize: 20 }}>
            We are experts when it comes to photography. Almost every image on
            this site was taken by us. We use up to date camera equipment to
            ensure that you get the highest quality images possible. Contact us
            if you would like us to take professional photographs at your
            corporate function, wedding, or anything that your imagination
            desires! We are willing to travel internationally.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

const PhotographyMobile = () => {
  return (
    <MainLayout>
      <Head>
        <title>Rhys | Photography</title>
        <meta name="description" content="Photographers based in Cape Town" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Rhys" />
        <meta
          property="og:description"
          content="We can meet all your photography needs!"
        />
        <meta property="og:url" content="https://rhys.co.za/photography" />
        <meta property="og:type" content="website" />
      </Head>
      <div
        style={{
          minHeight: 600,
          marginTop: -160,
          width: "100%",
          backgroundImage: "url(./beach2.jpg)",
          backgroundSize: "cover",
        }}
      ></div>
      <div
        style={{
          // minHeight: 600,
          paddingBottom: 100,
          width: "100%",
          backgroundColor: "#e07a5f",
        }}
      >
        <div>
          <a
            style={{
              color: "#e07a5f",
              fontSize: 60,
              fontWeight: 100,
              zIndex: 100,
              position: "relative",
              top: -60,
              paddingLeft: 40,
            }}
          >
            Photography
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
            We are experts when it comes to photography. Almost every image on
            this site was taken by us. We use up to date camera equipment to
            ensure that you get the highest quality images possible. Contact us
            if you would like us to take professional photographs at your
            corporate function, wedding, or anything that your imagination
            desires! We are willing to travel internationally.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

const Photography = () => {
  const size = useWindowSize();
  return (
    <div>
      {size.width > 1100 ? <PhotographyDesktop /> : <PhotographyMobile />}
    </div>
  );
};

export default Photography;
