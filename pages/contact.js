import MainLayout from "../components/mainLayout";
import { useState, useEffect, useRef } from "react";
import emailjs, { send } from "emailjs-com";
import Head from "next/head";

// MUI
import { TextField, Button } from "@mui/material";
import useWindowSize from "../components/windowSize";

const ContactDesktop = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_js4chue",
        "template_h3ih17x",
        form.current,
        "user_AvdqkQRo1Tj2mPGvjiX7N"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmail("");
          setSubject("");
          setName("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <MainLayout>
      <Head>
        <title>Rhys | Contact</title>
        <meta name="description" content="Designers based in Cape Town" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Rhys" />
        <meta
          property="og:description"
          content="We can meet all your design needs!"
        />
        <meta property="og:url" content="https://rhys.co.za/contact" />
        <meta property="og:type" content="website" />
      </Head>
      <div
        style={{
          minHeight: "100vh",
          marginTop: -160,
          paddingTop: 150,
          width: "100%",
          backgroundImage: "url(./ocean2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backdropFilter: "blur(3px)",
            WebkitBackdropFilter: "blur(3px)",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            paddingLeft: 100,
            paddingRight: 100,
            paddingTop: 20,
            paddingBottom: 50,
            width: 600,
            borderRadius: 10,
          }}
        >
          <a style={{ fontSize: 40 }}>Contact Us</a>
          <br />
          <form onSubmit={sendEmail} ref={form} id="contact-form">
            <TextField
              margin="dense"
              fullWidth
              size="small"
              label="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              margin="dense"
              fullWidth
              size="small"
              label="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              margin="dense"
              fullWidth
              size="small"
              label="Subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
            <TextField
              margin="dense"
              fullWidth
              size="small"
              label="Message"
              multiline
              rows={8}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <br />
            <br />
            <Button
              type="submit"
              variant="outlined"
              fullWidth
              onClick={sendEmail}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

const ContactMobile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_js4chue",
        "template_h3ih17x",
        form.current,
        "user_AvdqkQRo1Tj2mPGvjiX7N"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmail("");
          setSubject("");
          setName("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <MainLayout>
      <Head>
        <title>Rhys | Contact</title>
        <meta name="description" content="Designers based in Cape Town" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Rhys" />
        <meta
          property="og:description"
          content="We can meet all your design needs!"
        />
        <meta property="og:url" content="https://rhys.co.za/contact" />
        <meta property="og:type" content="website" />
      </Head>
      <div
        style={{
          minHeight: "100vh",
          marginTop: -160,
          paddingTop: 150,
          width: "100%",
          backgroundImage: "url(./ocean2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backdropFilter: "blur(3px)",
            WebkitBackdropFilter: "blur(3px)",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 20,
            paddingBottom: 50,
            width: "90%",
            borderRadius: 10,
          }}
        >
          <a style={{ fontSize: 40 }}>Contact Us</a>
          <br />
          <form onSubmit={sendEmail} ref={form} id="contact-form">
            <TextField
              margin="dense"
              fullWidth
              size="small"
              label="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              margin="dense"
              fullWidth
              size="small"
              label="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              margin="dense"
              fullWidth
              size="small"
              label="Subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
            <TextField
              margin="dense"
              fullWidth
              size="small"
              label="Message"
              multiline
              rows={8}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <br />
            <br />
            <Button
              type="submit"
              variant="outlined"
              fullWidth
              onClick={sendEmail}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

const Contact = () => {
  const size = useWindowSize();
  return <div>{size.width > 900 ? <ContactDesktop /> : <ContactMobile />}</div>;
};

export default Contact;
