import useWindowSize from "../components/windowSize";
import MainLayout from "../components/mainLayout";

const PhotographyDesktop = () => {
  return (
    <MainLayout>
      <div
        style={{
          minHeight: 600,
          marginTop: -160,
          width: "100%",
          backgroundImage: "url(./beach2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
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
