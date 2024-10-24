import Header from "../component/header";
import Content from "../component/content";
import Footer from "@/component/footer";

export default function Home() {
  return (
    <>
      <div className="container-fluid p-0" id="sf-main-container">
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  );
}
