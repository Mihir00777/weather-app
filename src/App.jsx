
import { ThemeProvider } from './components/ThemeProvider';
import WeatherApp from './view/WeatherApp';

const App = () => {

  return (
    <ThemeProvider>
      <WeatherApp />
    </ThemeProvider>
  );
};

export default App;