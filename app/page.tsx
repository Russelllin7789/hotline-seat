import NavBar from "@/components/NavBar";
import IntroSection from "@/components/IntroSection";
import SeatSection from "@/components/SeatSection";
import QuestionSection from "@/components/QuestionSection";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <AnnouncementBar />

      <main>
        <section id="intro">
          <IntroSection />
        </section>

        <section id="seat">
          <SeatSection />
        </section>

        <section id="question">
          <QuestionSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}
