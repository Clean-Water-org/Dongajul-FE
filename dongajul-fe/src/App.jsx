import '@/styles/style.scss';
import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponents from './router/routes';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>페이지 로딩 중 ...</div>}>
        <RoutesComponents />
      </Suspense>
    </Router>
  );
}

export default App;
