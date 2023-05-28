import BackToTop from "@/components/BackToTop";
import Header from "@/components/Header";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <BackToTop />
      <main className="pt-44 px-8 bg-light dark:bg-dark">
        {children}
      </main>
    </>
  );
}