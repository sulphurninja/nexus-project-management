import { Navbar } from "./_components/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full w-full">
      <Navbar />
      <div
        className="h-full w-full bg-cover bg-center overflow-y-auto"
        style={{
          backgroundColor: "#FEFEFE",
          backgroundAttachment: "sticky",
        }}
      >
        {children}
      </div>
    </div>
  );
}
