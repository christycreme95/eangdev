import "react";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Site from "./components/site";

export default function Home() {
  return (
    <body className="flex flex-col min-h-screen">
      <Navbar/>
      <Site/>
      <Footer/>
    </body>
  );
}
