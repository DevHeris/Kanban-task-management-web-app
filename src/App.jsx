import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import PageNotFound from './pages/PageNotFound';
import AppLayout from './ui/AppLayout';
import Home from './pages/Home';
import Board from './pages/Board';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Navigate replace to="home" />} />
          <Route path="board/:boardId" element={<Board />} />
        </Route>
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
