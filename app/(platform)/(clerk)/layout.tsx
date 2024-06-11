const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col bg-[#1C1816] items-center justify-center bg-muted-foreground">
      <h1 className="text-neutral-100 text-3xl mt-2 mb-4 font-bold">
        Welcome to <span className="text-pink-600">NEXUS!</span>
      </h1>
      {children}
    </div>
  );
};

export default ClerkLayout;
