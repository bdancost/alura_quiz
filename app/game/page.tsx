import { AluraQuizLogo } from "../_components/AluraquizLogo";
import { Card } from "../_components/Card";
import { Footer } from "../_components/Footer";
import pageStyles from "../page.module.css";

export default function GameScreen() {
  return (
    <main className={pageStyles.screen} style={{ flex: 1 }}>
      <section className={pageStyles.container}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          <AluraQuizLogo />
        </div>
        <Card headerTitle="Pergunta 1 de 5">
          <h1>Quando foi lançado o primeiro filme do homem de ferro</h1>
          <p>Considere somente os filmes novos da Marvel</p>
        </Card>
        <Footer />
      </section>
    </main>
  );
}
