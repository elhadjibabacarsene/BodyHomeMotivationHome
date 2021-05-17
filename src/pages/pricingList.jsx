import React, { useState } from 'react';
import { pricing } from 'common/src/data/AppModern';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Container from 'common/src/components/UI/Container';
import { Icon } from 'react-icons-kit';
import { checkmarkCircled } from 'react-icons-kit/ionicons/checkmarkCircled';
import SectionWrapper, {PricingArea,InnerWrapper,PricingCard} from './pricingList.style';
import { Field, Form, Formik, FormikConfig, FormikValues,useFormikContext } from 'formik';
import { RadioGroup, TextField } from 'formik-material-ui';

const { monthly } = pricing; 

const PricingList = () => {
    
    const { values: formValues } = useFormikContext();
    
    const { typeAbonnement } = formValues;
    
    const [state, setState] = useState({
        active: 'monthly',
        pricingPlan: monthly,
    });
    
    let current_price = typeAbonnement=="1mois"? 15000:12000;

    const [abonnement,setAbonnement] = useState(current_price);

return (
<SectionWrapper id="pricing">
    <Container>
      <PricingArea>
      <Field component={RadioGroup} name="activity">
        <InnerWrapper>
          {state.pricingPlan.map((item) => (
            <PricingCard key={`${state.active}-card--key${item.id}`}>
              <div className="card-header">
                <Heading as="h3" content={item.title } className="textchoice" />
                <Text content={item.description} />
              </div>
              <div className="card-body">
                <ul className="feature-list">
                  {item.features.map((item) => (
                    <li key={`${state.active}-feature--key${item.id}`}>
                      <Icon icon={checkmarkCircled} /> {item.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-footer">
                <strong>
                  <span className="price">{item.price} FCFA</span> /mois
                </strong>
                
                <label onClick={() => setAbonnement(item.price)} className={item.price===abonnement? "btnchoice isChecked":"btnchoice"}>
                  <span className="d-flex">
                    <Field type="radio" name="typeAbonnement" className="mr-2 d-none" 
                           value={item.price==15000? "1mois":"3mois" }
                    />
                    <p className="mt-2">Je choisis cette option</p>
                  </span>
                </label>
                
              </div>
            </PricingCard>
          ))}
        </InnerWrapper>
        </Field>
      </PricingArea>
    </Container>
                <style jsx>{`   
                   .btnchoice{
                      font-size:15px;
                      font-family:Arial;
                      font-weight:bold;
                      padding:10px;
                      border-radius:5px;
                      cursor:pointer;
                      background-color:#e0e0dc;
                      text-align:center;
                    }
                    .btnchoice:hover{
                        box-shadow: #000 0px 12px 20px -10px;
                    }
                    .isChecked{
                      color:white;
                      background: -webkit-linear-gradient(45deg,#fd9603,#fd7c03,#c60041);
                      transition: all 0.5s ease-out;
                    }
                    
                `}</style>
</SectionWrapper>
   );

}

export default PricingList;