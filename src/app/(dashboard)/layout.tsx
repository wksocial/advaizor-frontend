import Footer from "@/components/Footer";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
