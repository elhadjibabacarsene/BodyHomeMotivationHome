import React, { useState, useCallback } from 'react';
import clsx from 'clsx';
import Image from 'material-ui-image'
import * as yup from 'yup';
import {
  AppBar,
  Container,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
  Box,
  Button,
  Card,
  CardContent, Divider,
  FormControl,
  FormControlLabel, List, ListItem, ListItemIcon, ListItemText,
  Radio, RadioProps,
  Step,
  StepLabel, Stepper, withStyles, MuiThemeProvider, createMuiTheme, fade,CircularProgress
} from '@material-ui/core';
import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import { RadioGroup, TextField } from 'formik-material-ui';
import { DatePicker } from 'formik-material-ui-pickers';
//import { DatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import object from 'yup/lib/object';
import Bootstrapp from '../../landing/containers/AppModern/boostrap.style';
import moment from "moment";
import MomentUtils from "@date-io/moment";
import "moment/locale/fr";
moment.locale("fr");
import CheckIcon from '@material-ui/icons/Check';
import { green,orange } from '@material-ui/core/colors';
import {theme} from './theme';
import { makeStyles } from '@material-ui/core/styles';
import {getCookieFromBrowser} from '../services/cookies';
import SubscribeUser from '../services/subscribe';
import Router from 'next/router';
import { Grid } from '@material-ui/core'; 
import { Row, Col } from 'react-bootstrap';
import CardIconsList from './cardIconsList';
import Confirmation from './confirmation';
import { handleNumbersOnly, getCardType } from './cardUtils';
import { useFormikContext } from 'formik';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { openModal, closeModal } from '@redq/reuse-modal';
import Checkbox from '@material-ui/core/Checkbox';
import subscribeResultModal from '../containers/AppModern/LoginModal/subscribeResult';
import { CloseModalButton } from '../containers/AppModern/Banner';
import PricingList from './pricingList'
import SelectInput from '@material-ui/core/Select/SelectInput';

const eye = <FontAwesomeIcon icon={faEye} />;
const sleep = (time) => new Promise((acc)=>setTimeout(acc,time));


export default function subscribeModal() {

  const useStyles = makeStyles((theme)=>({
    root: {
      '& label.Mui-focused': {
        color: 'orange',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'orange',
      },
    }
  }));

  const classes = useStyles();
  const [locale, setLocale] = useState("fr");
  const programmeChoisi = getCookieFromBrowser("programmeSouscrit");

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true); 
  };

  const [value, setValue] = useState(new Date("01/01/2000"));
  //const [selectedDate, handleDateChange] = useState(new Date("01/01/2000"));
  const [selectedDateExpirat, handleDateExpiratChange] = useState(new Date("01/01/2030"));

  const handleSubscribeModal = () => {
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
      component: subscribeResultModal,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: false
    });
  };


  return(
    <>
      <Bootstrapp>
          <div className="row">
            <AppBar position="fixed" className="bg-color-bhm-orange mb-5">
              <Toolbar variant="dense">
                <Typography variant="h5" className="p-3 text-center" align="center">Je démarre mon programme {programmeChoisi} sur BHM</Typography>
              </Toolbar>
            </AppBar>
          </div>
          <Box mt={5}>
        <div className="container">
          <div className="row mt-5">
            <div className="col-12 mt-5">
            <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} locale={locale}>
              <div className="bg-light rounded shadow-sm p-3">
              <FormikStepper
                initialValues={{
                  prenom: '',
                  nom: '',
                  sexe:'',
                  username: '',
                  password: '',
                  confirmPassword: '',
                  email: '',
                  telephone: '',
                  adresse: '',
                  dateNaissance: value,//selectedDate,//new Date("01/11/2010"),
                  typeAbonnement: '1mois',
                  programmeAbonnement: programmeChoisi,
                  expiryDate:selectedDateExpirat
                }}
                onSubmit={async(values) => {
                    //await sleep(3000);
                    console.log('values',values);
                    const resultSubscribe = await SubscribeUser(values);
                    //console.log(resultSubscribe);
                    if(resultSubscribe=='Success'){
                        window.localStorage.setItem('resultSubscribe',"Success");
                    }
                    else{
                        window.localStorage.setItem('resultSubscribe',"Failed");
                    }

                    handleSubscribeModal();
                }}
              > 
                <FormikStep validationSchema={object({
                  prenom: yup.string()
                    .required('Ce champs est obligatoire'),
                  nom: yup.string()
                    .required('Ce champs est obligatoire'),
                  sexe: yup.string()
                    .required('Ce champs est obligatoire'),
                  password: yup.string()
                    .required('Ce champs est obligatoire')
                    /*.matches(
                      /^.*(?=.{4,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                      "Le mot de passe doit contenir au moins 4 caractères avec: 1 caractère en majuscule, 1 chiffre et 1 caractère spécial"
                    )*/,
                  email: yup.string()
                    .email('Email non valide')
                    .required('Ce champs est obligatoire'),
                  username: yup.string()
                    .required('Ce champs est obligatoire'),
                  telephone: yup.string()
                    .required('Ce champs est obligatoire') 
                    .matches(new RegExp('^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$'),'le numéro de téléphone est invalide')
                    .max(9, 'Le numéro de téléphone doit comporter au minimum 9 chiffres')
                    .max(20, 'Le numéro de téléphone ne doit pas dépasser plus de 20 chiffres'),
                    
                  adresse: yup.string()
                    .required('Ce champs est obligatoire'),
                  dateNaissance: yup.string()
                    .required('Ce champs est obligatoire'), 
                    /*.test('dateNaissance', 'Should be greather than 12', function(value) {
                      return moment().diff(moment(value), 'years') >= 13;
                    })*/
                    
                  confirmPassword: yup.string()
                    .oneOf([yup.ref('password'),null],'Les deux mot de passe ne correspondent pas !')
                    .required('Ce champs est obligatoire')
                })} label="Parlez-nous un peu de vous !">
                  <div className="row">
                    <div className="col-6">
                        <Field fullWidth name="prenom" component={TextField} label="Prénom" className={classes.root}/>
                    </div>
                    <div className="col-6">
                        <Field fullWidth name="nom" component={TextField} label="Nom" className={classes.root}/>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-6 pass-wrapper">
                        <Field fullWidth type={passwordShown ? "text" : "password"} name="password" component={TextField} label="Mot de passe" className={classes.root}/>
                        <i onClick={togglePasswordVisiblity} className={passwordShown ? "shown" :null}>{eye}</i> 
                    </div>
                    <div className="col-6 pass-wrapper">
                        <Field type={passwordShown ? "text" : "password"} fullWidth name="confirmPassword" component={TextField} label="Confirmer le mot de passe" className={classes.root}/>
                        <i onClick={togglePasswordVisiblity} className={passwordShown ? "shown" :null}>{eye}</i> 
                    </div>
                    <style jsx>{`
                        .pass-wrapper {
                          display: flex;
                        }
                        i {
                          position: relative;
                          top: 5%;
                          right: 3%;
                          cursor: pointer;
                        }
                        .shown {
                          color: #ff9203;
                        }
                        
                      `}</style>
                  </div>
                  <div className="row mt-4">
                    <div className="col-6">
                        <Field fullWidth name="username" component={TextField} label="Nom d'utilisateur" className={classes.root}/>
                    </div>
                    <div className="col-6">
                        <Field fullWidth name="email" component={TextField} label="Email" className={classes.root}/>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-6">
                        <Field fullWidth name="telephone" component={TextField} label="Téléphone" className={classes.root}/>
                    </div>
                    <div className="col-6">
                        <Field fullWidth inputVariant="outlined" name="adresse" component={TextField} label="Adresse" className={classes.root}/>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-6">
                      <FormControl fullWidth>
                        <Field fullWidth as="select" name="sexe" label="sexe" className="mt-4 mb-4">
                          <option value="Homme">Homme</option>
                          <option value="Femme">Femme</option>
                        </Field>
                      </FormControl>
                    </div>
                    <div className="col-6">
                      <FormControl fullWidth>
                         <Field component={DatePicker} type="date" 
                                format="YYYY-MM-DD" views={["year", "month", "date"]} 
                                name="dateNaissance" label="Date de naissance" 
                                className={classes.root}
                                maxDate={new Date("01/11/2010")}
                          />
                        
                      </FormControl>
                    </div>
                  </div>
                </FormikStep>
                <FormikStep validationSchema={object({})} label="Durée abonnement">
                  <PricingList/>
                </FormikStep>
                <FormikStep validationSchema={object({
                    nameOnCard : yup.string()
                                    .required('Ce champs est obligatoire'),
                    cardNumber: yup.string()
                                   .required('Ce champs est obligatoire') 
                                   .matches(new RegExp('^(?:4[0-9]{12}(?:[0-9]{3})?)$'),'Numéro de carte non valide')
                                   .max(20,'le numéro de carte doit comporter au plus 20 chiffres'),
                    /*expiryDate: yup.string()
                                   .required('Ce champs est obligatoire'),*/
                    security:   yup.string()
                                   .matches(new RegExp('[0-9]{3}'),'la clé de sécurité doit comporter exactement 3 chiffres')
                                   .required('Ce champs est obligatoire')
                                   .max(3,'la clé de sécurité doit comporter exactement 3 chiffres'),
                })} label="Modalité de Paiement">
                  <div className="row mb-4 ml-4 mt-2">
                    <Col md={{ span: 5, offset: 3 }}>
                      <div className="CardPaymentForm">
                        <Card className="shadow-sm">
                            <h3 className="CardPaymentFormTitle">Payer avec votre carte de crédit</h3>
                            <CardIconsList /*type={getCardType(number)}*//>
                            <CardContent>
                                <div className="col-12">
                                    <Field fullWidth name="nameOnCard" component={TextField} label="Nom associé à la carte" className="mt-2"/>
                                </div>
                                <div className="col-12">
                                    <Field fullWidth name="cardNumber" component={TextField} label="Numéro de la carte" className="mt-4 mb-4"/>
                                </div>
                                <div className="col-12">
                                  <div className="row">
                                    <div className="col-6 ">
                                      <Field fullWidth component={DatePicker} 
                                             name="expiryDate" format="MM/yy" 
                                             views={['year', 'month']} 
                                             minDate={new Date()} 
                                             maxDate={new Date('2030/12/31')} 
                                             label="Date d'expiration" 
                                             className="mt-4 mb-4"/>
                                      
                                    </div>
                                    <div className="col-6">
                                      <Field fullWidth name="security" component={TextField} label="Clé de sécurité" className="mt-4 mb-4"/>
                                    </div>
                                  </div>
                                </div>
                                
                            </CardContent>
                            <style jsx>{`
                              @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
                              
                              .CardPaymentFormTitle {
                                color: #1a1916;
                                font-family:Roboto;
                                font-size: 21px;
                                font-weight: 500;
                                text-align: center;
                                margin: 20px 0 20px 0;
                              }
                              
                            `}</style>
                        </Card>
                      </div>
                    </Col>
                  </div>
                </FormikStep>
                <FormikStep validationSchema={object({})} label="Confirmation">
                  <Confirmation/>
                </FormikStep>
              </FormikStepper>
            </div>
            </MuiPickersUtilsProvider>
          </div>
          </div>
        </div>
          </Box>
      </Bootstrapp>
    </>
  );
};


export interface FormikStepsProps extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  label: string
}

export function FormikStep({ children }: FormikStepsProps) {
  return <>{children}</>;
}

export function FormikStepper({ children, ...props }: FormikConfig<FormikValues>) {

  const useStyles = makeStyles((theme)=>({
    active: {
      color: '#f4a84a',
    }

  }));

  const classes = useStyles();
  //const { active, completed } = props;


  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step] as React.ElementType<FormikStepsProps>;
  const [completed,setCompleted] = useState(false);
  
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  //Connaitre si nous sommes dans la dernère étape du formulaire
  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          setStep(s => s + 1);
        }
      }}>
      {({isSubmitting})=>(
      <div className="container">
        <Form autoComplete="off">
          <ThemeProvider theme={theme}>
          <Stepper alternativeLabel activeStep={step} className={"bg-light " + classes.active}>
            {childrenArray.map((child,index) => (
              <Step key={child.props.label} completed={step>index || completed }>
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {currentChild}
          
          <div className={isLastStep() ? "col-12 mb-4 d-flex":"col-12 mb-4 d-none"}>
            <input
              type="checkbox"
              name="confirm"
              checked={checked}
              onChange={handleChange}
              color="primary"
              className="mr-4 cklarge"
            />   
            <p className="textconfirm">
              J'accepte les conditions d'utilisation et je confirme la véracité des informations fournies
            </p>
              <style jsx>{`
                 .cklarge{
                    width:20px;
                    height:20px;
                 }
                 .textconfirm{
                   color:#025ca6;
                   font-size:14px;
                   font-weight:bold;
                   font-family:Roboto;
                 }
              `}</style>

          </div> 

          {step > 0 ? <Button disabled={isSubmitting} color="primary" variant="contained" onClick={() => setStep(s => s - 1)}>Etape précédente</Button> : null}
          <Button startIcon={isSubmitting? <CircularProgress size="1rem"/>: null } disabled={isSubmitting || (!checked && isLastStep())} variant="contained" className="ml-2" color="primary" type="submit">{isSubmitting ? 'Validation et envoi' : isLastStep() ? "Terminer l'inscription" : 'Etape suivante'}</Button>
          </ThemeProvider>
        </Form>
      </div>
      )}
    </Formik>
  );
}
