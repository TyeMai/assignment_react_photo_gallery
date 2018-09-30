import React, { Component } from 'react';

import '../App.css';
import instagramResponse from '../photos.js';
//import Select from '.elements/select.js';{*/<Select />*/}
import Pictures from './elements/Pictures.js';
//import PicInfo from '.elements/PicInfo.js'{*/<PicInfo /> */}

var imageData = instagramResponse.data
console.log(imageData)

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tye's Instagram Gallery</h1>
        </header>
        <main>
          <Pictures InstagramData={imageData} />
        </main>

      </div>
    );
  }
}

export default App;
