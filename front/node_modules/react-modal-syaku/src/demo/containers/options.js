import React from 'react';
import { defaultPropTypes, defaultProperties } from '_src/properties';

const Options = () => (
  <div>
    <h3># global options setting</h3>
    <pre>
      {`
        // setter
        setDefaultProps({ height: 300 });

        // getter
        getDefaultProps();
      `}
    </pre>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>name</th>
          <th>default value</th>
        </tr>
      </thead>
      <tbody>
        {
          Object.keys(defaultPropTypes).map(name => (
            <tr>
              <td>{name}</td>
              <td>{Object.prototype.hasOwnProperty.call(defaultProperties, name) ? `${defaultProperties[name]}` : ''}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
);

export default Options;
