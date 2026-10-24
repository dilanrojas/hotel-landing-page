import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Apartments from './pages/apartments';
import Favourites from './pages/favourites';
import Contact from './pages/contact';
import NotFound from './pages/not-found';
import Layout from './layouts/layout';

export default function App() {
  return (
    <Routes>

      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/apartments' element={<Apartments />} />
        <Route path='/apartments/:id' element={<Apartments />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}
