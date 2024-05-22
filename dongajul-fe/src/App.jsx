import '../src/styles/style.scss';
import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponents from './router/routes';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Suspense fallback={<div>페이지 로딩 중 ...</div>}>
          <RoutesComponents />
        </Suspense>
      </Router>
    </RecoilRoot>
  );
}

export default App;
