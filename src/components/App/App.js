
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { ConfigureStore } from '../../redux/configureStore';
import HomePage from '../../pages/Home';
import AboutUsPage from '../../pages/AboutUs';
import '../../custom.scss';
import './App.css';

const store = ConfigureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}  >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/aboutus" element={<AboutUsPage />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    )
  }
}
export default App;