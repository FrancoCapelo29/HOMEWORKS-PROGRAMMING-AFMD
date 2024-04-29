import './App.css'
import { toRna } from './dnaConverter';

const MyComponent: React.FC = () => {
  const dnaSequence = "GCTA";
  const rnaSequence = toRna(dnaSequence);

  return (
    <div>
      <p>DNA Sequence: {dnaSequence}</p>
      <p>RNA Sequence: {rnaSequence}</p>
    </div>
  );
};

export default MyComponent;
