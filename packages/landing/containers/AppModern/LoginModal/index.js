import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Input from 'common/src/components/Input';
import Button from 'common/src/components/Button';
import Image from 'common/src/components/Image';
import LoginModalWrapper from './loginModal.style';
import Axios from 'axios';
import CloseModalButton from '../Banner/index';
// import 'rc-tabs/assets/index.css';
import LoginImage from 'common/src/assets/image/appModern/14.jpeg';
import RadioGroup from 'common/src/components/RadioGroup';
import { paymentPolicy } from 'common/src/data/AppModern';
import InputGroup from 'common/src/components/InputGroup';
import { closeModal, openModal } from '@redq/reuse-modal';
import { resultModal } from '../Banner/resultRecommandation';
import recommandation from '../../../services/recommandation';
import getResultRecomandation from '../../../services/recommandation';

const LoginModal = ({
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
  const LoginButtonGroup = () => (
    <Fragment>
      <Button className="default" title="Se connecter" {...btnStyle} />
      <Button
        title="Mot de passe oublié ?"
        variant="textButton"
        {...outlineBtnStyle}
      />
    </Fragment>
  );

  const handleModalResult = () => {
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
      component: resultModal,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  const [state, setState] = useState({
    taille: '',
    poids: '',
    choix: 'prise_de_masse',
  });

  const [error, setError] = useState('');

  const handleFormData = (value, name) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleChange = (value, name) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    try {
      const resultRecommandation = await getResultRecomandation(state);
      console.log(resultRecommandation);
      //Je concerve le résultat dans le local storage
      window.localStorage.setItem('resultRecommandation', JSON.stringify(resultRecommandation));
      window.localStorage.setItem('programmeChoisi', state.choix);
      closeModal();
      handleModalResult();
    } catch (error) {
      if (state.taille === '' && state.poids !== '') {
        setError('Veuillez renseigner la taille');
      } else if (state.poids === '' && state.taille !== '') {
        setError('Veuillez renseigner le poids');
      } else if (state.taille === '' && state.poids === '') {
        setError('Veuillez renseigner les informations ci-dessous');
      }
    }
  };

  /* async componentDidMount() {
     // pending > resolved (success) OR rejected (failure)
     const { data: posts } = await http.get(config.apiEndpoint);
     this.setState({ posts });
   }*/

  const SignupButtonGroup = () => (
    <Fragment>
      <Button
        className="default"
        title="VALIDER"
        onClick={handleSubmit}
        {...btnStyle}
      />
    </Fragment>
  );
  return (
    <LoginModalWrapper>
      <Box className="row" {...row}>
        <Box className="col imageCol" {...col}>
          <Image className="patternImage" src={LoginImage} alt="Login Banner" />
        </Box>
        <Box className="col tabCol" {...col}>
          <Box {...contentWrapper}>
            {/*<Image src={LogoImage} {...logoStyle} alt="Logo" />*/}
            <Tabs
              defaultActiveKey="registerForm"
              renderTabBar={() => <ScrollableInkTabBar />}
              renderTabContent={() => <TabContent />}
            >
              <TabPane tab="S'inscrire à un programme" key="registerForm">
                {/*<Heading content="Welcome Folk" {...titleStyle} />*/}
                <Text
                  className="text-description"
                  content=""
                  {...descriptionStyle}
                />
                <Text
                  className="text-description etape"
                  content="Etape 1"
                  {...descriptionStyle}
                />
                {/*<Button
                  icon={<Image src={GoogleLogo} alt="Google Icon" />}
                  title="Sign up with Google"
                  iconPosition="left"
                  className="google-login__btn"
                  {...googleButtonStyle}
                />*/}
                <span className="error">{error}</span>
                <Input
                  inputType="text"
                  className="is-invalid"
                  isMaterial
                  label="Quel est votre taille (en cm)"
                  value={state.taille}
                  onChange={(value) => handleChange(value, 'taille')}
                  name="taille"
                />
                <Input
                  inputType="text"
                  isMaterial
                  label="Quel est votre poids (en Kg) ?"
                  value={state.poids}
                  onChange={(value) => handleChange(value, 'poids')}
                  name="poids"
                />
                <RadioGroup
                  name="radioGroup"
                  value={state.choix}
                  items={paymentPolicy}
                  onUpdate={(value) => handleFormData(value, 'choix')}
                />
                <div>
                  <SignupButtonGroup />
                </div>
              </TabPane>
              <TabPane tab="Se connecter" key="loginForm">
                {/*<Heading content="Bienvenue au BHM" {...titleStyle} />*/}
                <Text content="" {...descriptionStyle} />
                {/* <Button
                  icon={<Image src={GoogleLogo} alt="Google Icon" />}
                  title="Sign in with Google"
                  iconPosition="left"
                  className="google-login__btn"
                  {...googleButtonStyle}
                />*/}

                <Input inputType="text" isMaterial label="Nom d'utilisateur" />
                <Input inputType="password" isMaterial label="Mot de passe" />
                {/*<CheckBox
                  id="remember"
                  htmlFor="remember"
                  labelText="Remember Me"
                />*/}
                <div>
                  <LoginButtonGroup />
                </div>
              </TabPane>
            </Tabs>
          </Box>
        </Box>
      </Box>
    </LoginModalWrapper>
  );
};

// LoginModal style props
LoginModal.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  logoStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  hintTextStyle: PropTypes.object,
  contentWrapper: PropTypes.object,
  descriptionStyle: PropTypes.object,
  googleButtonStyle: PropTypes.object,
};

// LoginModal default style
LoginModal.defaultProps = {
  // Team member row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Team member col default style
  col: {
    width: [1, 1 / 2],
  },
  // Default logo size
  logoStyle: {
    width: '128px',
    height: 'auto',
    ml: '15px',
  },
  // Title default style
  titleStyle: {
    fontSize: ['22px', '36px', '50px'],
    fontWeight: '400',
    color: '#20201D',
    letterSpacing: '-0.025em',
    mt: '35px',
    mb: '10px',
  },
  // Description default style
  descriptionStyle: {
    color: 'rgba(52, 61, 72, 0.8)',
    fontSize: '20px',
    lineHeight: '26px',
    letterSpacing: '-0.025em',
    mb: '15px',
    ml: '1px',
  },
  // Content wrapper style
  contentWrapper: {
    pt: ['32px', '56px'],
    pl: ['17px', '32px', '38px', '40px', '56px'],
    pr: '32px',
    pb: ['32px', '56px'],
  },
  // Default button style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
  // Outline button outline style
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#fd7c03',
  },
  // Google button style
  googleButtonStyle: {
    bg: '#ffffff',
    color: '#343D48',
  },
};

export default LoginModal;
