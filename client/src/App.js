import { EthProvider } from "./contexts/EthContext";
import Home from "./components/Home";
import ThemeProviderWrapper from "./theme/ThemeProvider";
import Header from "./components/Header";

function App() {
  return (
    <EthProvider>
      <ThemeProviderWrapper>
        <div id="App">
          <Header />
          <Home />
        </div>
      </ThemeProviderWrapper>
    </EthProvider>
  );
}

export default App;
