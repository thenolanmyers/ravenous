import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render () {
    return (
      // TODO: Not sure how to handle js within JSX within js within JSX: {b}?
      <div className="BusinessList">
        {
          this.props.businesses.map( b => <Business business={b} /> )
        }
      </div>
    );
  }
}

export default BusinessList;
