import { Grid,Typography } from '@material-ui/core';
import { useFormikContext } from 'formik';
import moment from 'moment';


const Confirmation = () => {
    
    const { values: formValues } = useFormikContext();
    
    const { prenom, nom, telephone,dateNaissance, email,typeAbonnement,programmeAbonnement,
             nameOnCard, cardNumber, expiryDate } = formValues;
    
    return (
      <Grid item container direction="column" xs={12} sm={6} className="mt-4 mb-4">
        
        <Grid container>
            <Typography variant="h3" color="textPrimary" gutterBottom className="bigTitle">
                Informations Personelles
            </Typography>
            <Grid container>
                <React.Fragment>
                    <Grid item xs={6}>
                        <Typography gutterBottom>Prénom et Nom</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography gutterBottom>{`${prenom} ${nom}`}</Typography>
                    </Grid>
                </React.Fragment>
                <React.Fragment>
                    <Grid item xs={6}>
                        <Typography gutterBottom className="bigTitle">Contact</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography gutterBottom>Tel: {`${telephone}`}</Typography>
                        <Typography gutterBottom>Email: {`${email}`}</Typography>
                    </Grid>
                </React.Fragment>
            </Grid>
        
        </Grid>
        <Grid container>
            <Typography variant="h3" gutterBottom className="bigTitle">
                Informations sur l'abonnement
            </Typography>
            <Grid container>
                <React.Fragment>
                    <Grid item xs={6}>
                        <Typography gutterBottom>Programme Choisi</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography gutterBottom>{programmeAbonnement}</Typography>
                    </Grid>
                </React.Fragment>
                <React.Fragment>
                    <Grid item xs={6}>
                        <Typography gutterBottom className="bigTitle">Durée d'abonnement</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography gutterBottom>{typeAbonnement}</Typography>
                    </Grid>
                </React.Fragment>
            </Grid>
        
        </Grid>
        <Typography variant="h3" gutterBottom className="bigTitle">
           Modalités du Paiement
        </Typography>
        <Grid container>
            <React.Fragment>
                <Grid item xs={6}>
                    <Typography gutterBottom>Type de la carte</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography gutterBottom>Visa</Typography>
                </Grid>
            </React.Fragment>
            <React.Fragment>
            <Grid item xs={6}>
                <Typography gutterBottom>Nom associé à la carte</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography gutterBottom>{nameOnCard}</Typography>
            </Grid>
            </React.Fragment>
            <React.Fragment>
            <Grid item xs={6}>
                <Typography gutterBottom>Numéro de la carte</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography gutterBottom>{cardNumber}</Typography>
            </Grid>
            </React.Fragment>
            <React.Fragment>
            <Grid item xs={6}>
                <Typography gutterBottom>Date d'expiration</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography gutterBottom>
                {moment(expiryDate).format('MM-YYYY')}
                </Typography>
            </Grid>
        </React.Fragment>
      </Grid>
      
      <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
      
          .bigTitle{
            color:red;
            font-family:Roboto;
            font-weight: 500;
            margin: 50px 0 20px 0;
          }
          
        `}</style>
      </Grid>
    );
  }
  
  export default Confirmation;