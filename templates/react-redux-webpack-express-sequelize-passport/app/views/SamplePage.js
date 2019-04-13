import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Table from '../components/Table';
import { changeInput, fetchData } from '../redux/actions/samplepage.action';
import Views from '../components/utils';


class SamplePage extends React.Component {
  componentWillReceiveProps(nextProps) {
    const { search } = this.props;
    if (search !== nextProps.search) {
      // this.props.history.push('/about');
    }
  }

  handleChange = (e) => {
    const {
      dispatchChangeInput,
    } = this.props;
    dispatchChangeInput({
      prop: e.target.name,
      value: e.target.value,
    });
  };

    handleSubmit = (event) => {
      event.preventDefault();
      const {
        search,
        dispatchChangeInput,
        dispatchFetchData,
      } = this.props;
      dispatchChangeInput({ prop: 'err', value: false });
      if (search === '') {
        dispatchChangeInput({ prop: 'err', value: true });
      }
      dispatchFetchData(search);
    };

    render() {
      const {
        search,
        results,
        err,
      } = this.props;
      return (
        <div className="container">
          <Helmet>
            <title>Page Title</title>
            <meta name="description" content="Meta descriptions.." />
          </Helmet>
          <h1 className="heading">Sample Page</h1>
          <Table content={results} label="SamplePage Table" />
          <div className="row">
            <div className="col-md-6">
              <form>
                <input
                  type="text"
                  value={search}
                  placeholder="type Desmond"
                  name="search"
                  id="search"
                  className="searches"
                  onChange={this.handleChange}
                />
                <button className="btn btn-outline-success my-2 my-sm-0" name="search-btn" id="search-btn" type="submit" onClick={this.handleSubmit}>Search</button>
              </form>
            </div>
            {err ? <span> Input Error</span> : null}
            <Views />
          </div>
        </div>
      );
    }
}

SamplePage.propTypes = {
  search: PropTypes.string,
  results: PropTypes.arrayOf(PropTypes.object),
  err: PropTypes.bool,
  dispatchChangeInput: PropTypes.func,
  dispatchFetchData: PropTypes.func,
};
SamplePage.defaultProps = {
  search: '',
  results: [],
  err: false,
  dispatchChangeInput: null,
  dispatchFetchData: null,
};

const mapStateToProps = (state) => {
  const {
    search,
    results,
    err,
  } = state.sample;
  return {
    search,
    results,
    err,
  };
};

export const mapDispatchToProps = dispatch => ({
  dispatchChangeInput: evt => dispatch(changeInput(evt)),
  dispatchFetchData: payload => dispatch(fetchData(payload)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SamplePage));
