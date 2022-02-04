import { Route, Routes } from 'react-router-dom';
import NewPage from './pages/NewPage';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/:category" element={<NewPage />} />
        <Route path="/" element={<NewPage />} />
      </Route>
    </Routes>
  );
}

export default App;
