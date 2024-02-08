import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';


const Shop = () => {
  return <h1>Shop</h1>;
}

const App = () => {  

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        {/* index is use to set page to the first page */}
        {/* index={true} can be briefly write down to index */}
        <Route index element={<Home />} /> 
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
