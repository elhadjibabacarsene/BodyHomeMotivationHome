import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import BoostrapStyle from '../boostrap.style';
import { Alert, Button } from 'react-bootstrap';
import { closeModal, openModal } from '@redq/reuse-modal';
import CloseModalButton from './index';
import { SubscribeModal } from '../SubscribeModal/index';
import bhmFunctions from '../../../../functions/bhm';
import subscribeModal from '../../../pages/subscribePopupModal';
import Router from 'next/router';
import { setCookie } from '../../../services/cookies';

export const resultModal = ({
  row,
  col,
  btnStyle,
  logoStyle,
  titleStyle,
  contentWrapper,
  outlineBtnStyle,
  descriptionStyle,
  googleButtonStyle,
}) => {
  //On récupère le résultat de la recommandation
  const resultRecommandation = JSON.parse(
    window.localStorage.getItem('resultRecommandation')
  );
  console.log(resultRecommandation);

  //On définit les constances pour l'affichage
  const imc = bhmFunctions.GetImc(resultRecommandation.recommandation_programme); //toFixed(2);
  const statutRecommandation = bhmFunctions.GetRecommandation(resultRecommandation.recommandation_programme);//resultRecommandation.recommandation_programme;
  const programmeRecommander = bhmFunctions.Ucfirst(
    bhmFunctions.GetProgramme(resultRecommandation.recommandation_programme)
  );
  const programmeChoisi = bhmFunctions.Ucfirst(
    bhmFunctions.replaceUnderscoreToSpace(
      window.localStorage.getItem('programmeChoisi')
    )
  );

  //console.log(programmeChoisi);

  //Le message à afficher
  let message,
    noneRecommander = false,
    colorText = '';
  switch (statutRecommandation) {
    case 'recommande':
      message = 'Votre profil santé correspond bien à l’objectif ';
      colorText = 'success';

      break;
    case 'neutre':
      message = message = 'Votre profil santé correspond au programme ';
      colorText = 'warning';
      break;
    case 'non recommande':
      //
      message ='Le programme ' +programmeRecommander +' est plus adapté à votre profil santé que le programme ';
      colorText = 'danger';
      noneRecommander = true;
      break;
  }
  
  //const newmsg = render(<b className="text-primary">{programmeRecommander}</b>);
  
  const ButtonSubscribe = () => (
    <Fragment>
      {noneRecommander ? (
        <Button className="default" title="Poursuivre" {...btnStyle} />
      ) : (
        ''
      )}
    </Fragment>
  );
  const ButtonCancel = () => (
    <Fragment>
      <Button className="default" title="Annuler" {...btnStyle} />
    </Fragment>
  );

  const openSubscribeModal = async (finalChoice) => {
    closeModal();
    //setCookie('programmeSouscrit', programmeRecommander);
    setCookie('programmeSouscrit', finalChoice);
    window.localStorage.removeItem('programmeChoisi');
    window.localStorage.removeItem('resultRecommandation');
    await Router.push('/subscribePopupModal');
  };

  const handleModalSubscribe = () => {
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
      component: subscribeModal,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: false
    });
  };

  return (
    <>
      <BoostrapStyle>
        <div className="container-fluid">
          <div className="row bg-color-bhm-orange">
            <div className="col text-center pt-3">
              <h1 className="text-white">Résultat de la recommandation</h1>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col text-center">
              <h5>
                Votre Indice de Masse Corporelle est de:{' '}
                <span className="text-bhm-orange">{imc}</span>
              </h5>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col mt-4 text-center">
              <Alert variant={colorText}>
                <p>
                  {/*statutRecommandation==='non recommande'? 'Le programme '+newmsg+message:message*/}
                  {message}
                  <b className="text-success">{programmeChoisi}</b> !
                </p> 
              </Alert>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col text-center">
              <h5 className="text-dark">Que voulez vous faire maintenant ?</h5>
              <p className="text-secondary mt-3">Choisissez une option: </p>
            </div>
          </div>
          <div className="row mt-5 mb-4">
            <div className={statutRecommandation!="recommande"? "col-4 text-center":"col-6 text-center"}>
              <Button className="btn-bhm-orange w-100" onClick={closeModal}>
                Annuler
              </Button>
            </div>
            {statutRecommandation!="recommande"? <div className="col-4 text-center">
              <Button 
                  className="btn-bhm-orange w-100" 
                  onClick={() => openSubscribeModal(programmeRecommander)}
              >
                Se conformer à la recommandation
              </Button>
            </div>: null}
            <div className={statutRecommandation!="recommande"? "col-4 text-center":"col-6 text-center"}>
              <Button
                className="btn-bhm-orange w-100"
                onClick={() => openSubscribeModal(programmeChoisi)}
              >
                Poursuivre avec mon choix
              </Button>
            </div>
          </div>
        </div>
      </BoostrapStyle>
    </>
  );
};

// LoginModal style props
resultModal.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  logoStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  hintTextStyle: PropTypes.object,
  contentWrapper: PropTypes.object,
  descriptionStyle: PropTypes.object,
  googleButtonStyle: PropTypes.object,
};

resultModal.defaultProps = {
  // Title default style
  titleStyle: {
    fontSize: ['12px', '30px', '30px'],
    fontWeight: '400',
    color: '#fd9603',
    letterSpacing: '-0.025em',
    mt: '30px',
    mb: '10px',
    textAlign: 'center',
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
