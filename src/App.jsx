import { Route, Routes } from 'react-router-dom';
import NotFound404 from './components/404/NotFound404';
import IndexPage from './components/index-page/IndexPage';
import NavBar from './components/nabvar/NavBar';

export default function App() {
  return (
    <>
    <NavBar />

    <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="*" element={<NotFound404 />} />
    </Routes>
    </>
  );
}
