'use client';

import { AluraQuizLogo } from '../_components/AluraquizLogo';
import { Card } from '../_components/Card';
import { Footer } from '../_components/Footer';
import pageStyles from '../page.module.css';
import config from '../../config.json';
import { Alternative } from '../_components/Alternative';

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
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '24px',
          }}
        >
          <AluraQuizLogo />
        </div>
        <Card headerTitle={`Pergunta ${questionNumber} de ${questions.length}`}>
          <h1> {question.title} </h1>
          <p> {question.description} </p>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const $questionInfo = event.target as HTMLFormElement;
              const formData = new FormData($questionInfo);
              const { alternative } = Object.fromEntries(formData.entries());
              const isCorrectAnswer = alternative === question.answer;
            }}
          >
            {question.alternativas.map((alternative, index) => (
              <Alternative
                key={alternative + index}
                label={alternative}
                order={index}
              />
            ))}
            <button>Confirmar</button>
          </form>
        </Card>
        <Footer />
      </section>
    </main>
  );
}
