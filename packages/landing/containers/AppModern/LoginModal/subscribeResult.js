import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import BoostrapStyle from '../boostrap.style';
import { Alert, Button } from 'react-bootstrap';
import { closeModal, openModal } from '@redq/reuse-modal';
import CloseModalButton from '../Banner/index';
import { SubscribeModal } from '../SubscribeModal/index';
import bhmFunctions from '../../../../functions/bhm';
import subscribeModal from '../../../pages/subscribePopupModal';
import LoginModal from './index2';
import Router from 'next/router';
import { setCookie } from '../../../services/cookies';

const subscribeResultModal = ({
  row,
  col,
  btnStyle,
  logoStyle,
  titleStyle,
  msgStyle,
  contentWrapper,
  outlineBtnStyle,
  descriptionStyle,
  googleButtonStyle,
}) => {
  const resultSubscribe = window.localStorage.getItem('resultSubscribe');
  console.log(resultSubscribe);

  //Le message à afficher
  let message,
    colorText = '';
  switch (resultSubscribe) {
    case 'Success':
      message = 'Votre inscription a réussi';
      colorText = 'success';

      break;
    case 'Failed':
      message = message = 'Une erreur est survenue lors de votre inscription, veuillez réessayer plus tard!';
      colorText = 'danger';
      break;
  }

  /*const openLoginModal = async () => {
    closeModal();
    window.localStorage.removeItem('resultSubscribe');
    handleLoginModal();
  };*/
  const GotoLoginPage = () => {
    window.location.href="http://localhost:3000/login"
  }

  const gotoHome = async () => {
    closeModal();
    window.localStorage.removeItem('resultSubscribe');
    await Router.push('/');
  };

  /*const handleLoginModal = () => {
    openModal({
      config: {
        className: 'video-modal',
        disableDragging: true,
        default: {
          width: '1000px',
          height: '500px',
          x: 0,
          y: 0,
        },
      },
      component: LoginModal,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };*/

  return(
    <>
      <BoostrapStyle>
        <div className="container-fluid">
          <div className="row bg-color-bhm-orange">
            <div className="col text-center pt-3">
              <h1 className="text-white">Inscription</h1>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col mt-4 text-center">
              <Alert variant={colorText} className="msgStyle">
                {message}
              </Alert>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col text-center">
              <h5 className="text-dark">Que voulez vous faire maintenant ?</h5>
              <p className="text-secondary mt-3">Choisissez une option: </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-6 text-center">
              <Button className="btn-bhm-orange w-100" onClick={gotoHome}>
                Retourner à l'accueil
              </Button>
            </div>
            <div className="col-6 text-center">
              <Button
                className="btn-bhm-orange w-100"
                onClick={GotoLoginPage}
              >
                Se connecter
              </Button>
              
            </div>
          </div>
        </div>
      </BoostrapStyle>
    </>
  );
};

// LoginModal style props
subscribeResultModal.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  logoStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  hintTextStyle: PropTypes.object,
  contentWrapper: PropTypes.object,
  descriptionStyle: PropTypes.object,
  googleButtonStyle: PropTypes.object,
};

subscribeResultModal.defaultProps = {
  // Title default style
  titleStyle: {
    fontSize: ['12px', '30px', '30px'],
    fontWeight: '400',
    fontFamily:'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap',
    color: '#fd9603',
    letterSpacing: '-0.025em',
    mt: '30px',
    mb: '10px',
    textAlign: 'center',
  },
  msgStyle:{
    fontSize: ['12px', '30px', '30px'],
    fontWeight: '400',
    fontFamily:'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap'
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  col: {
    width: [1, 1 / 2],
  },
  descriptionStyle: {
    color: 'rgba(52, 61, 72, 0.8)',
    fontSize: '20px',
    lineHeight: '26px',
    letterSpacing: '-0.025em',
    mb: '15px',
    ml: '1px',
  },
};

export default subscribeResultModal;
