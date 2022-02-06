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
        <Image src={"/logo2.png"} width={160} height={60} />
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
            <a className="underline">Home</a>
          </Link>
          <Link passHref href="/web">
            <a className="underline">Web Design</a>
          </Link>
          <Link passHref href="/photography">
            <a className="underline">Photography</a>
          </Link>
          <Link passHref href="/graphicdesign">
            <a className="underline">Graphic Design</a>
          </Link>
          <Link passHref href="/contact">
            <a className="underline">Contact</a>
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
                <a>Home</a>
              </Link>
              <br />
              <Link href="/web" passHref>
                <a>Web Design</a>
              </Link>
              <br />
              <Link href="/photography" passHref>
                <a>Photography</a>
              </Link>
              <br />
              <Link href="/graphicdesign" passHref>
                <a>Graphic Design</a>
              </Link>
              <br />
              <Link href="/contact" passHref>
                <a>Contact Us</a>
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
          <Image src={"/logo2.png"} width={160} height={60} />
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
