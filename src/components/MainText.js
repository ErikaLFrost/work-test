import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  flex-basis: 100%;
  order: 3;
  padding-top: 2.5vw;
  div {
    width: 59%;
    text-align: start;

    h2 {
      font-size: 1.5vw;
      margin-bottom: 10px;
    }
    p {
      font-size: 1.2vw;
      margin-bottom: 12px;
      a {
        color: rgb(0, 157, 130);
      }
    }
  }
`;

const MainText = () => {
  return (
    <MainWrapper>
      <div>
        <h2>Rätt boränta och villkor direkt.</h2>
        <p>
          Hos oss behöver du aldrig pruta eller förhandla om boräntan. Din
          boränta och dina villkor är inte beroende av om du är skicklig på att
          förhandla. Din boränta beror på lånets storlek och{' '}
          <a href="#">belåningsgraden</a>. Vi kräver inte att du ska skaffa fler
          tjänster hos oss för att du ska få det bästa bolånet. Vi tar heller
          inte ut någon uppläggningsavgift. Här kan du kan själv räkna fram din
          bolåneränta.
        </p>
        <h2>Våra bolånespecialister bryr sig.</h2>
        <p>
          Vi är specialister på bolån och vill hjälpa dig att göra en bättre
          affär och skaffa bättre bolån. Ditt bolån ska vara bra, smidigt och
          tryggt. Tar du bolån hos oss har du alltid tillgång till våra
          boendespecialister som hjälper dig genom hela din affär.
        </p>
        <p>
          Vi tycker att du måste kunna prata bolån med oss på tider som passar
          dig, eller när du behöver. Därför har vi personer med rätt kompetens
          på plats alla dagar, 8-21. Vi finns på <a href="#">0771-45 30 00</a>.
          Börja gärna med att planera och räkna i vår lånekalkyl. Du kan göra
          det när du vill, dygnet runt.
        </p>
        <p>
          Som ny bolånekund hos oss får du kostnadsfri juristhjälp och rabatt på
          försäkringar.
        </p>
      </div>
    </MainWrapper>
  );
};

export default MainText;
