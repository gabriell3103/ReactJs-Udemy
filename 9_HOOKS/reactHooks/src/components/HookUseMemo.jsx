import { useState, useEffect, useMemo } from 'react';

const HookUseMemo = () => {
  const [number, setNumber] = useState(0);

  //   const premiumNumbers = ['0', '100', '200'];

  const premiumNumbers = useMemo(() => {
    ['0', '100', '200'];
  }, []);

  useEffect(() => {
    console.log('premiumNumbers alterado');
  }, [premiumNumbers]);

  return (
    <div>
      <h2>UseMemo</h2>
      <input type="text" onChange={e => setNumber(e.target.value)} />
      {premiumNumbers.includes(number) ? <p>Acertou o número</p> : ''}
      <hr />
    </div>
  );
};

export default HookUseMemo;
