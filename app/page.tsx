import { AluraQuizLogo } from './_components/AluraquizLogo/index';
import { Footer } from './_components/Footer';
import { Card } from './_components/Card';
import pageStyles from './page.module.css';
import Link from 'next/link';

export default function Page() {
  return (
    <main className={pageStyles.screen} style={{ flex: 1 }}>
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

        <Card headerTitle='Teste suas habilidades'>
          <p style={{ marginBottom: '32px' }}>
            Teste os seus conhecimentos sobre o universo Marvel e divirta-se
            criando o seu AluraQuiz!
          </p>
          <Link href='/game'>Jogar</Link>
        </Card>
        <Footer />
      </section>
    </main>
  );
}
