import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-[90%] items-center justify-center">
        this is landing page
      </div>
      <Footer />
    </div>
  );
}
