import './App.css';
import Home from './components/Pages/Home/Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Services from './components/Pages/Services/Services';
import About from './components/Pages/About/About';
import Admin from './components/Pages/Admin/Admin';
import Header from './components/Pages/Header/Header';
import Footer from './components/Pages/Footer/Footer';
import LogIn from './components/Pages/LogIn/LogIn';
import Rag from './components/Regestation/Rag';
import AuthProvider from './components/Context/AuthProvider';
import PrivetRouter from './components/PrivetRouter/PrivetRouter';
import AminNav from './components/Pages/Admin/AdminNav/AminNav';
import AddProduct from './components/Pages/Admin/AddProduct/AddProduct';
import MakeAdmin from './components/Pages/Admin/MakaAdmin/MakeAdmin';
import Explor from './components/Pages/Admin/Explor/Explor';
import ManageOrder from './components/Pages/Admin/ManageOrder/ManageOrder';
import ManageProduct from './components/Pages/Admin/ManageProduct/ManageProduct';


function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
          <Header></Header>
           <Home></Home>
           <Footer></Footer>
          </Route>
          <Route path='/home'>
          <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <PrivetRouter path='/services'>
            <Header></Header>
            <Services></Services>
            <Footer></Footer>
          </PrivetRouter>
          <Route exact path='/explor'>
              <AminNav></AminNav>
              <Explor></Explor>
          </Route>
          <Route path='/makeAdmin'>
          <AminNav></AminNav>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path='/orderLis'>
          <AminNav></AminNav>
            <ManageOrder></ManageOrder>
          </Route>
          <Route path='/manageProduct'>
          <AminNav></AminNav>
              <ManageProduct></ManageProduct>
          </Route>
          <Route path='/addProduct'>
            <AminNav></AminNav>
            <AddProduct></AddProduct>
          </Route>       
          <PrivetRouter path='/about'>
          <Header></Header>
            <About></About>
            <Footer></Footer>
          </PrivetRouter>
          <PrivetRouter exact path='/admin'>
            <AminNav></AminNav>
            <Admin></Admin>
            
          </PrivetRouter>
          <Route path='/login' >
          <Header></Header>
            <LogIn/>
            <Footer></Footer>
          </Route>
          <Route path='/rag'>
          <Header></Header>
           <Rag/>
           <Footer></Footer>
          </Route>
        </Switch>
        
        
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
