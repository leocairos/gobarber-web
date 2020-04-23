import React from 'react';

import SigIn from './pages/Signin';
import SigUp from './pages/Signup';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <SigUp />
    <GlobalStyle />
  </>
);

export default App;
