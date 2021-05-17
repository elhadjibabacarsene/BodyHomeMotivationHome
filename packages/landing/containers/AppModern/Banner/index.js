import React from 'react';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import { playCircle } from 'react-icons-kit/fa/playCircle';
import { openModal, closeModal } from '@redq/reuse-modal';
import Text from 'common/src/components/Text';
import Image from 'common/src/components/Image';
import Button from 'common/src/components/Button';
import Heading from 'common/src/components/Heading';
import Rating from 'common/src/components/Rating';
import Container from 'common/src/components/UI/Container';
import Input from 'common/src/components/Input';

import LoginModal from '../LoginModal/index';

import BannerWrapper, {
  BannerContent,
  RatingInfo,
  BannerImage,
  ButtonGroup,
  VideoGroup,
  VideoWrapper,
  CustomerWrapper,
  ImageWrapper,
  SubscribeModal,
  SubscribeModalWrapper
} from './banner.style';

import { client } from 'common/src/data/AppModern';

import microsoft from 'common/src/assets/image/appModern/envato-icon.png';
import bannerImg from 'common/src/assets/image/appModern/banner2.png';
import videoBanner1 from 'common/src/assets/image/appModern/video-1.png';
import videoBanner2 from 'common/src/assets/image/appModern/video-2.png';
import circleBorder from 'common/src/assets/image/appModern/shape.svg';
import Box from 'common/src/components/Box';
import PropTypes from 'prop-types';
import Newsletter from '../Newsletter';
// close button for modal
export const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol"/>}
  />
);

const ModalContent = ({
  sectionWrapper,
    textArea,
    buttonArea,
    buttonStyle,
    title,
    description,
}) => {
  return (
    <SubscribeModal>
      <Container>
        <box {...sectionWrapper} as="section">
          <Input
            inputType="text"
            label="Votre Poids en (KG)"
            iconPosition="right"
            isMaterial={true}
            className="email_input"
          />
        </box>
        <box>
          <Input
            inputType="text"
            label="Votre taille en centimètre (cm)"
            iconPosition="right"
            isMaterial={true}
            className="email_input"
          />
        </box>
      </Container>
    </SubscribeModal>
  );
};

ModalContent.propTypes = {
  sectionWrapper: PropTypes.object,
  textArea: PropTypes.object,
  buttonArea: PropTypes.object,
  buttonStyle: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object
};

ModalContent.defaultProps = {
  sectionWrapper: {},
  textArea: {
    mb: ['40px', '40px', '40px', '0', '0'],
    pr: ['0', '0', '0', '80px', '100px']
  },
  title: {
    fontSize: ['18px', '20px', '22px', '24px', '26px'],
    fontWeight: '500',
    color: '#fff',
    lineHeight: '1.34',
    mb: ['14px', '14px', '14px', '14px', '13px'],
    textAlign: ['center', 'center', 'center', 'left', 'left'],
    letterSpacing: '-0.025em'
  },
  description: {
    fontSize: ['14px', '14px'],
    maxWidth: ['100%', '400px'],
    fontWeight: '400',
    color: '#fefefe',
    lineHeight: '1.7',
    mb: 0,
    textAlign: ['center', 'center', 'center', 'left', 'left']
  },
  buttonArea: {
    zIndex: 1
  },
  buttonStyle: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '700',
    pl: '30px',
    pr: '30px'
  }
};
export const Banner = () => {
  // modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: 'video-modal',
        disableDragging: true,
        default: {
          width: '1000px',
          height: '500px',
          x: 0,
          y: 0
        }
      },
      component: LoginModal,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true
    });
  };
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <br/>
          <br/>
          <br/>
          <br/>
          {/*<Fade up>
            <RatingInfo>
              <Rating rating={4} />
              4.9 of 5 By <img src={microsoft} alt="Microsoft" />
            </RatingInfo>
          </Fade>*/}
          <Fade up delay={100}>
            <Heading
              as="h1"
              content="DES RESULTATS VISIBLES EN QUELQUES SEMAINES"
            />
          </Fade>
          {
            <Fade up delay={200}>
              <Text content="DEVENEZ VOTRE MEILLEURE VERSION !"/>
            </Fade>
          }
          <Fade up delay={300}>
            <ButtonGroup>
              <Button className="primary" title="Je démarre mon programme" onClick={handleVideoModal}/>
              {/*<Button
                className="text"
                variant="textButton"
                icon={<Icon icon={playCircle} />}
                iconPosition="left"
                title="Watch Video"
              />*/}
            </ButtonGroup>
          </Fade>
          {/*<VideoGroup>
            <img
              src={videoBanner1}
              onClick={handleVideoModal}
              alt="Microsoft"
            />
            <img
              src={videoBanner2}
              onClick={handleVideoModal}
              alt="Microsoft"
            />
          </VideoGroup>*/}
        </BannerContent>
        <BannerImage>
          <Fade up delay={100}>
            {/*<Image src={bannerImg} alt="Banner" />*/}
          </Fade>
        </BannerImage>
      </Container>
      {/*<CustomerWrapper>
        <Text content="Trusted by companies like:" />
        <ImageWrapper>
          {client.map(item => (
            <Image
              key={`client-key${item.id}`}
              src={item.image}
              alt={item.title}
            />
          ))}
        </ImageWrapper>
      </CustomerWrapper>*/}
      <img
        className="bannerBottomShape"
        src={circleBorder}
        alt="Bottom Circle"
      />
    </BannerWrapper>
  );
};

export default Banner;
