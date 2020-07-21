import React, {useState, Fragment} from 'react';
import { useTranslation } from 'react-i18next';
// import styled from '@emotion/styled';

// const Nav = styled.nav`
//   width: 100%;
//   padding: 2rem 0;
//   background-color: gray;
// `

function App(){
  const { t, i18n } = useTranslation();

  function handleClick(lang){
    i18n.changeLanguage(lang);
  }

  return (
    <Fragment>
      <nav>
        <button onClick={()=>handleClick('en')}>
          English
        </button>
        <button onClick={()=>handleClick('es')}>
          Español
        </button>
        <button onClick={()=>handleClick('de')}>
          Deutch
        </button>
      </nav>
      <header>
        <p>{t('text.1')}</p>
        <p>{t('why.1')}</p>
      </header>
    </Fragment>
  );
}

export default App;
