import React, {Component} from 'react';

export default class List extends Component {
  render () {
    return (
      <table className='myClass'>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((item, index) => (
            <tr key={index}>
              <td>
                {item}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
