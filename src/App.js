import { Switch, Route } from 'react-router';
import GlobalStyle from './globalStyle';
import Homepage from './pages/homepage/Homepage';
import { AppProvider } from './Context/ContextApp'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AppProvider>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </AppProvider>
    </div>
  );
}

export default App;
