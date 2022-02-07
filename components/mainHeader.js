import useWindowSize from "./windowSize";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// MUI
import { Button, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const DesktopHeader = () => {
  return (
    <header>
      <header
        style={{
          backgroundColor: "#1c1e26",
          marginRight: 15,
          marginLeft: 15,
          marginTop: 15,
          height: 90,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          filter: "drop-shadow(0 0 0.3rem #222222)",
        }}
      >
        <Image src={"/logo2.png"} width={160} height={60} alt="rhys logo" />
      </header>
      <header
        style={{
          backgroundColor: "#1c1e26",
          marginRight: 15,
          marginLeft: 15,
          marginTop: 15,
          height: 40,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          filter: "drop-shadow(0 0 0.3rem #222222)",
          color: "white",

          // fontFamily: "Source Serif 4",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "50%",
          }}
        >
          <Link passHref href="/">
            <p className="underline">Home</p>
          </Link>
          <Link passHref href="/web">
            <p className="underline">Web Design</p>
          </Link>
          <Link passHref href="/photography">
            <p className="underline">Photography</p>
          </Link>
          <Link passHref href="/graphicdesign">
            <p className="underline">Graphic Design</p>
          </Link>
          <Link passHref href="/contact">
            <p className="underline">Contact</p>
          </Link>
        </div>
      </header>
    </header>
  );
};

const MobileHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <header
        style={{
          backgroundColor: "#1c1e26",
          marginRight: 15,
          marginLeft: 15,
          marginTop: 15,
          height: 90,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          filter: "drop-shadow(0 0 0.6rem black)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "33.33%",
          }}
        >
          <Button onClick={() => setOpen(true)}>
            <MenuIcon style={{ color: "gray" }} />
          </Button>
          <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <br />
              <Link href="/" passHref>
                <p>Home</p>
              </Link>
              <br />
              <Link href="/web" passHref>
                <p>Web Design</p>
              </Link>
              <br />
              <Link href="/photography" passHref>
                <p>Photography</p>
              </Link>
              <br />
              <Link href="/graphicdesign" passHref>
                <p>Graphic Design</p>
              </Link>
              <br />
              <Link href="/contact" passHref>
                <p>Contact Us</p>
              </Link>
              <br />
            </div>
          </Drawer>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "33.33%",
          }}
        >
          <Image src={"/logo2.png"} width={160} height={60} alt="rhys logo" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "33.33%",
          }}
        ></div>
      </header>
    </header>
  );
};

const MainHeader = () => {
  const size = useWindowSize();
  return <div>{size.width > 1100 ? <DesktopHeader /> : <MobileHeader />}</div>;
};

export default MainHeader;
