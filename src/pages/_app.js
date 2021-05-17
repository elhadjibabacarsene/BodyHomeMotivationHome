import React, { Fragment } from 'react';
import { Modal } from '@redq/reuse-modal';
import '@redq/reuse-modal/es/index.css';
import 'rc-tabs/assets/index.css';
import AuthApi from '../services/authApi';
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';
import PortailHome from './portail';
export default ({ Component, pageProps }) => {
  AuthApi.setup();
  return (
    <Fragment>
      <Modal />
      <Component {...pageProps} />
    </Fragment>
  );
};
