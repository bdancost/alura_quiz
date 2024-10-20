import cardStyles from "./card.module.css";

export function Card() {
  return (
    <div className={cardStyles.card}>
      <header className={cardStyles.cardHeader}>
        <h1 className={cardStyles.cardHeaderTitle}>Teste suas habilidades</h1>
      </header>
      <section className={cardStyles.cardBody}>
        <p style={{ marginBottom: "32px" }}>
          Teste os seus conhecimentos sobre o universo Marvel e divirta-se
          criando o seu AluraQuiz!
        </p>
      </section>
    </div>
  );
}
