import { isLeap } from './utils';
import LeapYearChecker from './LeapYearChecker';
import './App.css'



const year = 2024;
if (isLeap(year)) {
  console.log(`${year} es un año bisiesto.`);
} else {
  console.log(`${year} no es un año bisiesto.`);
}
const App: React.FC = () => {
  return (
    <div>
      <h1>Verificador de Años Bisiestos</h1>
      <LeapYearChecker year={2020} />
      <LeapYearChecker year={2000} />
    </div>
  );
};

export default App;
