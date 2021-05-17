import React, { Fragment } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Input from 'common/src/components/Input';
import CheckBox from 'common/src/components/Checkbox/index';
import Button from 'common/src/components/Button';
import Image from 'common/src/components/Image';
import LoginModalWrapper from './loginModal.style';
// import 'rc-tabs/assets/index.css';
import LogoImage from 'common/src/assets/image/appModern/logo.png';
import LoginImage from 'common/src/assets/image/appModern/14.jpeg';
import GoogleLogo from 'common/src/assets/image/appModern/google-icon.jpg';
import RadioGroup from 'common/src/components/RadioGroup';
import Axios from 'axios';
import BoostrapStyle from '../boostrap.style';
import AuthApi from '../../../services/authApi';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

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
      <Button
        className="default"
        title="Se connecter"
        onClick={handleSubmit}
        {...btnStyle}
      />
      <Button
        title="Mot de passe oublié ?"
        variant="textButton"
        onClick={handleLogout}
        {...outlineBtnStyle}
      />
    </Fragment>
  );
  const SignupButtonGroup = () => (
    <Fragment>
      <Button className="default" title="VALIDER" {...btnStyle} />
    </Fragment>
  );

  const [credentiels, setCredentiels] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState(false);

  const handleChange = (value, name) => {
    setCredentiels({
      ...credentiels,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    try {
      await AuthApi.authenticate(credentiels);
      setError(false);
    } catch (e) {
      setError(true);
    }
  };
  const handleLogout = () => {
    AuthApi.logout();
  };
  
  const eye = <FontAwesomeIcon icon={faEye} />;
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true); 
  };

  return (
    <LoginModalWrapper>
      <BoostrapStyle>
        <Box className="row" {...row}>
          <Box className="col imageCol" {...col}>
            <Image
              className="patternImage"
              src={LoginImage}
              alt="Login Banner"
            />
          </Box>
          <Box className="col tabCol" {...col}>
            <Box {...contentWrapper}>
              {/*<Image src={LogoImage} {...logoStyle} alt="Logo" />*/}
              <Tabs
                defaultActiveKey="loginForm"
                renderTabBar={() => <ScrollableInkTabBar />}
                renderTabContent={() => <TabContent />}
              >
                <TabPane tab="Se connecter" key="loginForm">
                  {/*<Heading content="Bienvenue au BHM" {...titleStyle} />*/}
                  {/* <Button
                  icon={<Image src={GoogleLogo} alt="Google Icon" />}
                  title="Sign in with Google"
                  iconPosition="left"
                  className="google-login__btn"
                  {...googleButtonStyle}
                />*/}
                  <div className="row mt-5">
                    <div className="col-12">
                      <p className={'text-danger ' + (error ? 'd-block' : 'd-none')}>
                        Nom d'utilisateur ou Mot de passe incorrect
                      </p>
                      <Input inputType="text" isMaterial label="Nom d'utilisateur"
                        value={credentiels.username} onChange={(value) => handleChange(value, 'username')}/>
                    </div>
                    <div className="col-12">
                      <Input inputType="password" isMaterial label="Mot de passe" inputIcon={eye}
                        value={credentiels.password} onChange={(value) => handleChange(value, 'password')}/>
                       
                    </div>
                    <style jsx>{`
                        .pass-wrapper {
                         
                        }
                        .pass-wrapper i {
                          position: relative;
                          top: 5%;
                          right: 1%;
                          cursor: pointer;
                        }
                        .pass-wrapper .shown {
                          color: #ff9203;
                        }
                        
                      `}</style>
                  </div>

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
      </BoostrapStyle>
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
    mb: '23px',
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
