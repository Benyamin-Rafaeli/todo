import React, { Component } from 'react';

export default class ItemStatusFilter extends Component {
  render() {
    // const {} = this.props;
    return (
      <div className="btn-group">
        <button type="button" className="btn btn-info">
          All
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Active
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Done
        </button>
      </div>
    );
  }
}

// const ItemStatusFilterFunc = () => {
//   return (
//     <div className="btn-group">
//       <button type="button" className="btn btn-info">
//         All
//       </button>
//       <button type="button" className="btn btn-outline-secondary">
//         Active
//       </button>
//       <button type="button" className="btn btn-outline-secondary">
//         Done
//       </button>
//     </div>
//   );
// };
