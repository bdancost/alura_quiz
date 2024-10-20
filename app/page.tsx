import { AluraQuizLogo } from "./components/AluraquizLogo/index";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card";
import homeStyles from "./home.module.css";

export default function Page() {
  return (
    <main className={homeStyles.homeScreen} style={{ flex: 1 }}>
      <section className={homeStyles.container}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          <AluraQuizLogo />
        </div>

        <Card />
        <Footer />
      </section>
    </main>
  );
}
