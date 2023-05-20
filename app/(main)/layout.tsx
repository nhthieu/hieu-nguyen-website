import Header from "@/components/Header";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="px-48 pt-44 2xl:px-44 xl:px-36 lg:px-32 md:px-20 sm:px-12 xs:px-8 bg-light dark:bg-dark">
        {children}
      </main>
    </>
  );
}