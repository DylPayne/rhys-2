import MainHeader from "./mainHeader";
import Footer from "./mainFooter";

const MainLayout = ({ children }) => {
  return (
    <main>
      <MainHeader style={{zIndex: 1000}} />
      <div>{children}</div>
      <Footer />
    </main>
  );
};

export default MainLayout;