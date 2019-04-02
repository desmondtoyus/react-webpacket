import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class PageNotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>PAGE NOT FOUND </title>
          <meta name="description" content="Page not found" />
        </Helmet>
        <h1> PAGE NOT FOUND </h1>
      </div>
    );
  }
}

export default PageNotFound;
