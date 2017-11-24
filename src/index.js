import React from 'react';
import ReactDOM from 'react-dom';
import  {BrowserRouter} from 'react-router-dom';
// import NavBar from './components/NavBar';
// import HomePageHeading from './components/HomePageHeading';
// import ImageSlider from './components/ImageSlider';
import App from './components/App';
// ReactDOM.render(
//     <div>
//  <NavBar links={links} />
//  <HomePageHeading />
//  <ImageSlider />
//     </div>,
//  document.getElementById('root' )
// );

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>,
    document.getElementById('root')
);