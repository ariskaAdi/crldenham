import Contact from "@/components/pages/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* <Hero /> */}
      <div className="p-4 bg-gray-50">
        {/* <About /> */}
        {/* <LatestProject /> */}
        {/* <Testimonial /> */}
        <Contact />
      </div>
    </main>
  );
}
