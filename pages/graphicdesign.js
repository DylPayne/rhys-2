import useWindowSize from "../components/windowSize";
import MainLayout from "../components/mainLayout";

const GraphicDesignDesktop = () => {
  return (
    <MainLayout>
      <div
        style={{
          minHeight: 600,
          marginTop: -160,
          width: "100%",
          backgroundImage: "url(./alps1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        style={{
          // minHeight: 600,
          paddingBottom: 100,
          width: "100%",
          backgroundColor: "#3d405b",
        }}
      >
        <div>
          <a
            style={{
              color: "#3d405b",
              fontSize: 120,
              fontWeight: 100,
              zIndex: 100,
              position: "relative",
              top: -120,
              paddingLeft: 40,
            }}
          >
            Graphic Design
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
            Any web designer has to have graphic design knowledge, so we thought
            why not also offer this as a separate service? We can make your
            companies logos, design invites, make adverts and more! Contact us
            today to find out more information.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

const GraphicDesignMobile = () => {
  return (
    <MainLayout>
      <div
        style={{
          minHeight: 600,
          marginTop: -160,
          width: "100%",
          backgroundImage: "url(./alps1.jpg)",
          backgroundSize: "cover",
        }}
      ></div>
      <div
        style={{
          // minHeight: 600,
          paddingBottom: 100,
          width: "100%",
          backgroundColor: "#3d405b",
        }}
      >
        <div>
          <a
            style={{
              color: "#3d405b",
              fontSize: 50,
              fontWeight: 100,
              zIndex: 100,
              position: "relative",
              top: -50,
              paddingLeft: 40,
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
          <p style={{ textAlign: "center", color: "white", fontSize: 20 }}>
            Any web designer has to have graphic design knowledge, so we thought
            why not also offer this as a separate service? We can make your
            companies logos, design invites, make adverts and more! Contact us
            today to find out more information.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

const GraphicDesign = () => {
  const size = useWindowSize();
  return (
    <div>
      {size.width > 1100 ? <GraphicDesignDesktop /> : <GraphicDesignMobile />}
    </div>
  );
};

export default GraphicDesign;
