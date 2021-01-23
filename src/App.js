import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/home/Home';
import About from './components/about/About';
import Weights from './components/weights/Weights';
import Error from './components/error/Error';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
 
class App extends Component {
  render() {
    return (   
      <div className="page-container">
      <div className="content-wrap">
      
       <BrowserRouter>
        <div>
          <Navbar />
            <Switch>
             <Route path="/about" component={About}/>
             <Route path="/weights" component={Weights}/>
             <Route path="/" component={Home} exact/>
            <Route component={Error}/>
           </Switch>
        </div>
      </BrowserRouter>
      </div>
      <Footer />
      </div>
    );
  }
}
 
export default App;
