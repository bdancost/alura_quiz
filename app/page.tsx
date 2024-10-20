import homeStyles from "./home.module.css";
import cardStyles from "./card.module.css";

// JSX === HTML do React

export default function Page() {
  return (
    <main className={homeStyles.homeScreen} style={{ flex: 1 }}>
      <div className={cardStyles.card}>
        <header className={cardStyles.cardHeader}>
          <h1 className={cardStyles.cardHeaderTitle}>Teste suas habilidades</h1>
        </header>

        <p>
          Teste os seus conhecimentos sobre o universo Marvel e divirta-se
          criando o seu AluraQuiz!
        </p>
        <footer>
          <p>Desenvolvido por Daniel Fernandes</p>
        </footer>
      </div>
    </main>
  );
}
