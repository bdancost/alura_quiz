import { AluraQuizLogo } from "../_components/AluraquizLogo";
import { Card } from "../_components/Card";
import { Footer } from "../_components/Footer";
import pageStyles from "../page.module.css";
import config from "../../config.json";

const questions = config.questions;

export default function GameScreen() {
  const currentQuestion = 0;
  const questionNumber = currentQuestion + 1;
  const question = questions[currentQuestion];
  return (
    <main
      className={pageStyles.screen}
      style={{
        flex: 1,
        backgroundImage: `url("${question.image}")`,
      }}
    >
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
        <Card headerTitle={`Pergunta ${questionNumber} de ${questions.length}`}>
          <h1> {question.title} </h1>
          <p> {question.description} </p>
        </Card>
        <Footer />
      </section>
    </main>
  );
}
