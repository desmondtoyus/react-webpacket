import React from 'react';

class Jumbotron extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4" />
        {/* <img src={Image} /> */}
        <p>It uses utility classNames for typography and spacing to space content out within the larger container.</p>
        {/* <Link className="btn btn-primary btn-lg" to='/about' role="button">Learn more</Link> */}
      </div>
    );
  }
}

export default Jumbotron;
