import React, { Fragment } from 'react';
import { SingleDatePicker } from 'react-dates';
import PropTypes from 'prop-types';
import BoostrapStyle from '../boostrap.style';
import { Alert, Button, FormControl } from 'react-bootstrap';
import Input from 'common/src/components/Input';
export const SubscribeModal = ({
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
  const ButtonSubscribe = () => (
    <Fragment>
      <Button className="default" title="Valider" {...btnStyle} />
    </Fragment>
  );
  const ButtonCancel = () => (
    <Fragment>
      <Button className="default" title="Annuler" {...btnStyle} />
    </Fragment>
  );

  return (
    <>
      <BoostrapStyle>
        <div className="container-fluid bg-white">
          <div className="row bg-color-bhm-orange">
            <div className="col text-center pt-3">
              <h1 className="text-white">Je m'inscris</h1>
            </div>
          </div>
          <div className="row">
            <div className="col pt-5">
              <Input
                inputType="text"
                className="is-invalid"
                isMaterial
                label="Nom"
                //value={state.taille}
                // onChange={(value) => handleChange(value, 'taille')}
                name="taille"
              />
            </div>
            <div className="col pt-5">
              <Input
                inputType="text"
                className="is-invalid"
                isMaterial
                label="Prénom"
                //value={state.taille}
                //onChange={(value) => handleChange(value, 'taille')}
                name="taille"
              />
            </div>
          </div>
          <div className="row">
            <div className="col mt-5">
              <Input
                inputType="email"
                className="is-invalid"
                isMaterial
                label="Email"
                //value={state.taille}
                //onChange={(value) => handleChange(value, 'taille')}
                name="taille"
              />
            </div>
            <div className="col mt-5"></div>
          </div>
        </div>
      </BoostrapStyle>
    </>
  );
};

// LoginModal style props
SubscribeModal.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  logoStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  hintTextStyle: PropTypes.object,
  contentWrapper: PropTypes.object,
  descriptionStyle: PropTypes.object,
  googleButtonStyle: PropTypes.object,
};

SubscribeModal.defaultProps = {
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
