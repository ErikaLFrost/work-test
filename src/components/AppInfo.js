import React from 'react';
import styled from 'styled-components';

const AppInfoWrapper = styled.div`
  flex-basis: 100%;
  order: 3;
  div {
    width: 59%;
    text-align: start;
    h2 {
      font-size: 1.5vw;
      margin-bottom: 10px;
    }
    p {
      font-size: 1.2vw;
      margin-bottom: 11px;
    }
  }
`;

const AppInfo = () => {
  return (
    <AppInfoWrapper>
      <div>
        <h2>Sköt allt via SBAB:s app eller inloggad</h2>
        <p>
          Med SBAB:s app kan du enkelt se ditt saldo och smidigt göra
          överföringar från ditt sparkonto direkt i din mobil. Appen finns
          tillgänglig för iPhone och Android och du kan ladda ner den direkt i
          App Store eller Google Play.
        </p>
        <p>
          Du kan öppna och hålla ordning på ditt sparande inloggad på sbab.se.
          Där kan du se saldo, göra överföringar, lägga upp månadssparande,
          sätta egna namn på dina sparkonton, se kontoutdrag med mera. Du loggar
          in enkelt
        </p>
      </div>
    </AppInfoWrapper>
  );
};

export default AppInfo;
