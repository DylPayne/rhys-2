import MainLayout from "../components/mainLayout";
import Image from "next/image";
import useWindowSize from "../components/windowSize";
import Head from "next/head";

const DesktopHome = () => {
  return (
    <MainLayout>
      <Head>
        <title>Rhys | Cape Town</title>
        <meta
          name="description"
          content="Cape Town web designers, photographers and graphic designers"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Rhys" />
        <meta
          property="og:description"
          content="We can meet all your web design, photography and graphic design needs!"
        />
        <meta property="og:url" content="https://rhys.co.za/" />
        <meta property="og:type" content="website" />
      </Head>
      {/* 01 */}
      <div
        style={{
          // backgroundColor: "#696969",
          // border: "1px solid red",
          height: "100vh",
          display: "flex",
          position: "relative",
          top: -160,
          zIndex: -100,
        }}
      >
        <div
          style={{
            backgroundColor: "#3d405b",
            width: "40%",
            paddingTop: 180,
            zIndex: 0,
            whiteSpace: "nowrap",
          }}
        >
          <div>
            <a
              style={{
                color: "#81b29a",
                fontSize: 465,
                fontWeight: 900,
                position: "absolute",
                left: -140,
                top: 50,
                zIndex: -100,
              }}
            >
              01
            </a>
          </div>
          <div>
            <a
              style={{
                color: "#f4f1de",
                fontSize: 190,
                fontWeight: 100,
                zIndex: 100,
                marginLeft: 75,
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
              whiteSpace: "normal",
            }}
          >
            <p style={{ textAlign: "start", color: "white" }}>
              At Rhys our main focus is web design. We build our sites from
              scratch, meaning we don’t use Wordpress, Wix or any other similar
              programs. In order to make sure our sites are as efficient,
              customisable and fast as possible, we build them from scratch. We
              use frameworks called React.js and Next.js, which are both very
              modern technologies. Because we use these frameworks we can also
              build custom web apps. For example, we can make complex booking
              systems or staff management websites. Contact us today to get more
              information.
            </p>
          </div>
        </div>
        <div
          style={{
            // backgroundColor: "#696969",
            width: "60%",
            // border: "1px solid red",
            paddingTop: 180,
            zIndex: -10,
            // background: "url(./city1.jpg)",
            // backgroundSize: "cover",
          }}
        >
          <Image
            src="/city1.jpg"
            layout="fill"
            alt="city"
            objectFit="cover"
            quality={50}
          />
        </div>
      </div>

      {/* 02 */}
      <div
        style={{
          // backgroundColor: "#696969",
          // border: "1px solid red",
          height: "100vh",
          display: "flex",
          flexDirection: "row-reverse",
          position: "relative",
          top: -160,
          zIndex: -100,
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "#e07a5f",
            width: "40%",
            paddingTop: 180,
            zIndex: 0,
          }}
        >
          <div>
            <a
              style={{
                color: "#3d405b",
                fontSize: 465,
                fontWeight: 900,
                position: "absolute",
                right: -140,
                top: 50,
                zIndex: -100,
                // overflowX: "hidden",
              }}
            >
              02
            </a>
          </div>
          <div>
            <a
              style={{
                color: "#f4f1de",
                fontSize: 140,
                fontWeight: 100,
                zIndex: 100,
                marginLeft: -295,
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
              whiteSpace: "normal",
            }}
          >
            <p style={{ textAlign: "start", color: "white" }}>
              We are experts when it comes to photography. Almost every image on
              this site was taken by us. We use up to date camera equipment to
              ensure that you get the highest quality images possible. Contact
              us if you would like us to take professional photographs at your
              corporate function, wedding, or anything that your imagination
              desires! We are willing to travel internationally.
            </p>
          </div>
        </div>
        <div
          style={{
            // backgroundColor: "#696969",
            width: "60%",
            // border: "1px solid red",
            paddingTop: 180,
            zIndex: -10,
            // background: "url(./beach1.jpg)",
            // backgroundSize: "cover",
          }}
        >
          <Image
            alt="beach"
            src="/beach1.jpg"
            layout="fill"
            objectFit="cover"
            quality={50}
          />
        </div>
      </div>

      {/* 03 */}
      <div
        style={{
          // backgroundColor: "#696969",
          // border: "1px solid red",
          height: "100vh",
          display: "flex",
          position: "relative",
          top: -160,
          zIndex: -100,
          marginBottom: -160,
        }}
      >
        <div
          style={{
            backgroundColor: "#81b29a",
            width: "40%",
            paddingTop: 180,
            zIndex: 0,
            // whiteSpace: "nowrap",
          }}
        >
          <div>
            <a
              style={{
                color: "#e07a5f",
                fontSize: 465,
                fontWeight: 900,
                position: "absolute",
                left: -140,
                top: 50,
                zIndex: -100,
              }}
            >
              03
            </a>
          </div>
          <div>
            <a
              style={{
                color: "#f4f1de",
                fontSize: 110,
                fontWeight: 100,
                zIndex: 100,
                marginLeft: 75,
              }}
            >
              Graphic Design
            </a>
          </div>
          <div
            style={{
              width: "100%",
              paddingLeft: 50,
              paddingRight: 50,
              whiteSpace: "normal",
            }}
          >
            <p style={{ textAlign: "start", color: "white" }}>
              Any web designer has to have graphic design knowledge, so we
              thought why not also offer this as a separate service? We can make
              your companies logos, design invites, make adverts and more!
              Contact us today to find out more information.
            </p>
          </div>
        </div>
        <div
          style={{
            // backgroundColor: "#696969",
            width: "60%",
            // border: "1px solid red",
            paddingTop: 180,
            zIndex: -10,
            // background: "url(./workspace1.jpg)",
            // backgroundSize: "cover",
          }}
        >
          <Image
            src="/workspace1.jpg"
            layout="fill"
            alt="Workspace"
            objectFit="cover"
          />
        </div>
      </div>
    </MainLayout>
  );
};

const MobileHome = () => {
  return (
    <MainLayout>
      <Head>
        <title>Rhys | Cape Town</title>
        <meta
          name="description"
          content="Cape Town web designers, photographers and graphic designers"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Rhys" />
        <meta
          property="og:description"
          content="We can meet all your web design, photography and graphic design needs!"
        />
        <meta property="og:url" content="https://rhys.co.za/" />
        <meta property="og:type" content="website" />
      </Head>
      {/* 01 */}
      <div
        style={{
          // backgroundColor: "#696969",
          // border: "1px solid red",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          top: -110,
          zIndex: -100,
        }}
      >
        <div
          style={{
            // backgroundColor: "#696969",
            width: "100%",
            height: 600,
            // border: "1px solid red",
            paddingTop: 180,
            zIndex: -10,
            // background: "url(./city1.jpg)",
            // backgroundSize: "cover",
          }}
        >
          <Image src="/city1.jpg" alt="city" layout="fill" objectFit="cover" />
        </div>
        <div
          style={{
            backgroundColor: "#81b29a",
            width: "100%",
            // paddingTop: 180,
            zIndex: 0,
            textAlign: "end",
          }}
        >
          <div>
            <p
              style={{
                color: "gray",
                fontSize: 465,
                fontWeight: 900,
                position: "absolute",
                left: -140,
                top: 190,
                zIndex: -10000,
                opacity: "70%",
              }}
            >
              01
            </p>
          </div>
          <div style={{ paddingRight: 40 }}>
            <a
              style={{
                color: "#81b29a",
                fontSize: 60,
                fontWeight: 100,
                zIndex: 100,
                position: "relative",
                top: -60,
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
            <p style={{ textAlign: "center", color: "white" }}>
              At Rhys our main focus is web design. We build our sites from
              scratch, meaning we don’t use Wordpress, Wix or any other similar
              programs. In order to make sure our sites are as efficient,
              customisable and fast as possible, we build them from scratch. We
              use frameworks called React.js and Next.js, which are both very
              modern technologies. Because we use these frameworks we can also
              build custom web apps. For example, we can make complex booking
              systems or staff management websites. Contact us today to get more
              information.
            </p>
          </div>
        </div>
      </div>

      {/* 02 */}
      <div
        style={{
          // backgroundColor: "#696969",
          // border: "1px solid red",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          top: -110,
          zIndex: -100,
        }}
      >
        <div
          style={{
            // backgroundColor: "#696969",
            width: "100%",
            height: 600,
            // border: "1px solid red",
            paddingTop: 180,
            zIndex: -10,
            // background: "url(./beach1.jpg)",
            // backgroundSize: "cover",
          }}
        >
          <Image
            src="/beach1.jpg"
            alt="beach"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div
          style={{
            backgroundColor: "#e07a5f",
            width: "100%",
            // paddingTop: 180,
            zIndex: 0,
            textAlign: "end",
            height: "40%",
          }}
        >
          <div>
            <a
              style={{
                color: "gray",
                fontSize: 465,
                fontWeight: 900,
                position: "absolute",
                left: -140,
                top: 190,
                zIndex: -10000,
                opacity: "70%",
                // height: "100%",
              }}
            >
              02
            </a>
          </div>
          <div style={{ paddingRight: 40 }}>
            <a
              style={{
                color: "#e07a5f",
                fontSize: 65,
                fontWeight: 100,
                zIndex: 100,
                position: "relative",
                top: -65,
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
            <p style={{ textAlign: "center", color: "white" }}>
              We are experts when it comes to photography. Almost every image on
              this site was taken by us. We use up to date camera equipment to
              ensure that you get the highest quality images possible. Contact
              us if you would like us to take professional photographs at your
              corporate function, wedding, or anything that your imagination
              desires! We are willing to travel internationally.
            </p>
          </div>
        </div>
      </div>

      {/* 03 */}
      <div
        style={{
          // backgroundColor: "#696969",
          // border: "1px solid red",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          top: -110,
          marginBottom: -110,
          zIndex: -100,
        }}
      >
        <div
          style={{
            // backgroundColor: "#696969",
            width: "100%",
            height: 600,
            // border: "1px solid red",
            paddingTop: 180,
            zIndex: -10,
            // background: "url(./workspace1.jpg)",
            // backgroundSize: "cover",
          }}
        >
          <Image
            src="/workspace1.jpg"
            alt="workspace"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div
          style={{
            backgroundColor: "#3d405b",
            width: "100%",
            // paddingTop: 180,
            zIndex: 0,
            textAlign: "end",
            height: "30%",
          }}
        >
          <div>
            <a
              style={{
                color: "gray",
                fontSize: 465,
                fontWeight: 900,
                position: "absolute",
                left: -140,
                top: 190,
                zIndex: -10000,
                opacity: "70%",
              }}
            >
              03
            </a>
          </div>
          <div style={{ paddingRight: 40 }}>
            <a
              style={{
                color: "#3d405b",
                fontSize: 50,
                fontWeight: 100,
                zIndex: 100,
                position: "relative",
                top: -50,
              }}
            >
              Graphic Design
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
            <p style={{ textAlign: "center", color: "white" }}>
              Any web designer has to have graphic design knowledge, so we
              thought why not also offer this as a separate service? We can make
              your companies logos, design invites, make adverts and more!
              Contact us today to find out more information.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

const Home = () => {
  const size = useWindowSize();
  return <div>{size.width > 1100 ? <DesktopHome /> : <MobileHome />}</div>;
};

export default Home;
