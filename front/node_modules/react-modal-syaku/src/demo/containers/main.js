import React from 'react';
import { Route, Link } from 'react-router-dom';
import DevTools from 'mobx-react-devtools';
import Basic from './basic';
import Multiple from './multiple';
import Trigger from './trigger';
import Options from './options';
import ConfirmExample from './confirm';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <h1>React Modal Demo</h1>
        <hr />
        <div className="row">
          <div className="col-xs-3">
            <ul className="nav nav-pills nav-stacked">
              <li role="presentation">
                <a href="https://github.com/syakuis/react-modal"><i className="fa fa-github" aria-hidden="true" /> Github</a>
              </li>
              <li role="presentation">
                <Link to="/" replace>Basic</Link>
              </li>
              <li role="presentation">
                <Link to="/multiple" replace>Multiple</Link>
              </li>
              <li role="presentation">
                <Link to="/trigger" replace>Trigger event</Link>
              </li>
              <li role="presentation">
                <Link to="/options" replace>Options</Link>
              </li>
              <li role="presentation">
                <Link to="/confirm" replace>Confirm</Link>
              </li>
            </ul>
          </div>
          <div className="col-xs-9">
            <Route exact path="/" component={Basic} />
            <Route path="/multiple" component={Multiple} />
            <Route path="/trigger" component={Trigger} />
            <Route path="/options" component={Options} />
            <Route path="/confirm" component={ConfirmExample} />
          </div>
        </div>
        {process.env.SOURCE_TARGET !== 'node' ? <DevTools /> : null}
      </div>
    );
  }
}

export default Main;
