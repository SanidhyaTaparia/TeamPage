import './App.css';
import Model1 from './model1/Model1';
import Model2 from './model2/Model2';
import Model3 from './model3/Model3';
import Model4 from './Model4/Model4';
import Model5 from './model5/Model5';
import Footer from './Footer/Footer';
import Header from './Header/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Model1 />
      <Model2 /> */}
      <Model3 />
      {/* <Model4 />
      <Model5 /> */}
      <Footer />
    </div>
  );
}

export default App;
