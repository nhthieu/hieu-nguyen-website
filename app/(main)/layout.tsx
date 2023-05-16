import Header from "@/components/Header";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="px-48 pt-44">
        {children}
      </main>
    </>
  );
}