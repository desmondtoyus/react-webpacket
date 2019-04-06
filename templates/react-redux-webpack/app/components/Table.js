import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { content, label } = this.props;
    return (
      <main>
        {content.length ? (
          <div>
            <span> {label} </span>
            <table className="table  table-sm">
              <thead className="table-info">
                <tr>
                  <th />
                  <th>Name</th>
                  <th>Registration Date</th>
                  <th>E-mail address</th>
                  <th>Premium Plan</th>
                </tr>
              </thead>
              <tbody>
                {content.map(item => (
                  <tr key={item.id}>
                    <td>
                      <label htmlFor="checkbox" className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" />
                        <span className="custom-control-indicator" />
                      </label>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.date}</td>
                    <td>{item.email}</td>
                    <td>{item.plan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : <span> No Content</span>}
      </main>
    );
  }
}

// Do not include required props in the defaultProps
Table.propTypes = {
  label: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    plan: PropTypes.string.isRequired,
  })),
};

Table.defaultProps = {
  content: [],
};

export default Table;
