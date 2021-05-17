import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const LoginModalWrapper = styled.div`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${themeGet('colors.white', '#ffffff')};
  @media only screen and (min-width: 1201px) {
    max-width: 1170px;
    width: 100%;
  }
  @media only screen and (max-width: 667px) {
    width: 100%;
  }
  .col {
    position: relative;
    .patternImage {
      position: absolute;
      width: 100%;
      height: 500px;
      object-fit: cover;
    }
    @media only screen and (max-width: 991px) {
      width: 100%;
      &.imageCol {
        display: none;
      }
    }
  }
  .reusecore__button {
    background-color: transparent;
    &.default {
      background-image: -webkit-linear-gradient(45deg,#fd9603,#fd7c03,#c60041);
      transition: all 0.3s ease;
      &:hover {
        box-shadow: black;
      }
    }
  }
  .radio_group {
    font-size:14px;
    margin-bottom:12px;
      >label{
        &.active {
        color:white;
        background: -webkit-linear-gradient(45deg,#fd9603,#fd7c03,#c60041);
      }
      }
    }
  .error {
      color:red;
      font-size:12px;
  }
  .recom-popup-title{
    color:#fd9603;
    text-align:center;
  }
  .text-felicitation{
    text-align:center;
    font-size:36px;
    margin-top:100px;
  }
  .text-result{
    text-align:center;
  }
  .text-result{
    margin-top:100px;
    font-size:22px;
  }
  .text-option-choice{
    text-align:center;
    margin-top:50px
  }
  .text-warning{
    color:yellow;
  }
  .text-success{
    color:green;
  }
  .text-danger{
    color:red;
  }
  .etape{
    margin-bottom:15px;
  }
  .error-visible{
    visibility:hidden;
  }
  .rc-tabs {
    border: 0;
    max-width: auto;
    margin: 30px 0 0;
    @media only screen and (max-width: 991px) {
      max-width: 100%;
    }
    .rc-tabs-bar {
      margin-left: 15px;
    }
    .rc-tabs-nav-container {
      padding: 0;
      .rc-tabs-tab-prev,
      .rc-tabs-tab-next {
        display: none;
      }
      .rc-tabs-nav-scroll,
      .rc-tabs-nav {
        width: 100%;
        .rc-tabs-tab {
          width: 50%;
          margin-right: 0;
          padding: 13px 0;
          text-align: center;
        }
      }
    }
    .rc-tabs-tabpane {
      padding-left: 15px;
      padding-bottom: 15px;
      padding-right: 15px;
      @media (min-width: 1200px) {
        min-height: 560px;
      }
    }
    .google-login__btn {
      width: 100%;
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 45px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      .btn-icon {
        position: relative;
        left: -22px;
        img {
          width: 21px;
          height: auto;
        }
      }
    }
    .reusecore__input {
      margin-bottom: 30px;
      &.is-material {
        &.is-focus {
          label {
            color: #fd7c03;
            top: -12px;
          }
          .highlight {
            background-color: #fd7c03;
          }
        }
      }

      label {
        font-weight: 400;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.6);
        top: 15px;
      }
    }
    .reusecore__checkbox {
      margin: 0 0 35px;
      label {
        .reusecore__field-label {
          font-size: 13px;
          font-weight: 400;
        }
      }
    }
  }
`;

export default LoginModalWrapper;
