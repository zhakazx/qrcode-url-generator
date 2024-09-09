import Header from "@/components/header";
import Footer from "@/components/footer";
import Main from "@/components/main";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
