import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Nano from './containers/nano/Nano';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Nano />
        </Layout>
      </div>
    );
  }
}

export default App;
