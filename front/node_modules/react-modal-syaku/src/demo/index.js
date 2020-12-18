/**
 * @author: Seok Kyun. Choi. 최석균 (Syaku)
 * @site: http://syaku.tistory.com
 * @since: 2017. 8. 22.
 */

import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import '_resources/demo.css';

import Main from './containers/main';

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById('app'),
);
