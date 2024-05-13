import React from 'react';
import { isLeap } from './utils';

interface LeapYearCheckerProps {
  year: number;
}

const LeapYearChecker: React.FC<LeapYearCheckerProps> = ({ year }) => {
  const isLeapYear = isLeap(year);

  return (
    <div>
      <p>
        {year} {isLeapYear ? 'es' : 'no es'} un año bisiesto.
      </p>
    </div>
  );
};

export default LeapYearChecker;
