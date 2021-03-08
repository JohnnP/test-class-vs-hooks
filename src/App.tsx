import { FC } from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
import Controller from './component/ControllerBis';

const App: FC = () => {
  return (
    <RecoilRoot>
      <Controller />
    </RecoilRoot>
  );
};

export default App;
