import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

// Import Css
import './App.css';
import './bootstrap.min.css';
import './custom.css';

// Import Layout
import Header from './components/Header';
import ListUser from './components/ListUser';
import PostUser from './components/PostUser';
import DetilPostUser from './components/DetilPostUser';
import AlbumUser from './components/AlbumUser';
import DetilPostComment from './components/DetilPostComment';
import ViewPhotoAlbum from './components/ViewPhotoAlbum';
import DetilPhoto from './components/DetilPhoto';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />                    
          <Route path="/listUser" component={ListUser} />
          <Route path="/postUser" component={PostUser} />
          <Route path="/detilPostUser/:userId" component={DetilPostUser} />
          <Route path="/AlbumUser/:userId" component={AlbumUser} />
          <Route path="/detilPostComment/:postId" component={DetilPostComment} />
          <Route path="/viewPhotoAlbum/:albumId" component={ViewPhotoAlbum} />
          <Route path="/detilPhoto/:photoId" component={DetilPhoto} />
      </div>
    );
  }
}

export default App;
