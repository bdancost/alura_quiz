'use client';
import React from 'react';

import { AluraQuizLogo } from '../_components/AluraquizLogo';
import { Card } from '../_components/Card';
import { Footer } from '../_components/Footer';
import pageStyles from '../page.module.css';
import config from '../../config.json';
import { Alternative } from '../_components/Alternative';

const questions = config.questions;

const answerStates = {
  DEFAULT: 'DEFAULT',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
} as const;

export default function GameScreen() {
  const [answerState, setAnswerState] = React.useState<
    keyof typeof answerStates
  >(answerStates.DEFAULT);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
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
              if (isCorrectAnswer) {
                setAnswerState(answerStates.SUCCESS);
              }
              if (!isCorrectAnswer) {
                setAnswerState(answerStates.ERROR);
              }
              setTimeout(() => {
                setCurrentQuestion(currentQuestion + 1);
              }, 2 * 1000);
            }}
          >
            {question.alternativas.map((alternative, index) => (
              <Alternative
                key={alternative + index}
                label={alternative}
                order={index}
              />
            ))}
            {answerState === answerStates.DEFAULT && <button>Confirmar</button>}
            <p style={{ textAlign: 'center' }}>
              {answerState === answerStates.ERROR && '❌'}
              {answerState === answerStates.SUCCESS && '✅'}
            </p>
          </form>
        </Card>
        <Footer />
      </section>
    </main>
  );
}
