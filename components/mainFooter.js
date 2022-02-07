import Link from "next/link";
import Image from "next/image";
import useWindowSize from "./windowSize";

const DesktopFooter = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#1c1e26",
        height: 200,
        paddingLeft: 50,
        paddingRight: 50,
      }}
    >
      <Image src="/logo2.png" width={160} height={60} alt="rhys logo" />
      <Link passHref href="/contact">
        <a style={{ color: "white", fontSize: 20 }} className="underline">
          Contact Us
        </a>
      </Link>
    </div>
  );
};

const MobileFooter = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1c1e26",
        height: 200,
        // paddingLeft: 50,
        // paddingRight: 50,
      }}
    >
      <Image src="/logo2.png" width={160} height={60}  alt="rhys logo" />
      <br /><br />
      <Link passHref href="/contact">
        <a style={{ color: "white", fontSize: 20 }} className="underline">
          Contact Us
        </a>
      </Link>
    </div>
  );
};

const Footer = () => {
  const size = useWindowSize();
  return <div>{size.width > 900 ? <DesktopFooter /> : <MobileFooter />}</div>;
};

export default Footer;
