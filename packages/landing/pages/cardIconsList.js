import { Image } from 'react-bootstrap';
import Imgvisa from 'common/src/assets/image/appModern/visa.png';
import Imgmastercard from 'common/src/assets/image/appModern/mastercard.png';
import Imgjcb from 'common/src/assets/image/appModern/jcb.png';
import Imgamex from 'common/src/assets/image/appModern/amex.png';


const CardIconsList = (props) => {
  return (
    <ul className="CardPaymentFormCardIcons">
      <li className={`${props.type === 'amex' && 'active'}`}>
        <Image 
          fluid
          src={Imgamex} 
          alt="Amex"
          width="35px"
        />
      </li>
      <li className={`${props.type === 'jcb' && 'active'}`}>
        <Image 
          fluid
          src={Imgjcb} 
          alt="JCB" 
          width="35px"
        />
      </li>
      <li className={`${props.type === 'mastercard' && 'active'}`}>
        <Image 
          fluid
          src={Imgmastercard} 
          alt="MasterCard"
          width="35px"
        />
      </li>
      <li className={`${props.type === 'visa' && 'active'}`}>
        <Image 
          fluid
          src={Imgvisa} 
          alt="VISA"
          width="35px"
        />
      </li>
      
      <style jsx>{`
        .CardPaymentFormCardIcons {
          margin: 0 0 20px 0;
          padding: 0;
          text-align: center;
        }
        
        li {
          list-style: none;
          display: inline-block;
          margin: 0 5px;
          padding: 0 10px;
          border-radius: 5px; 
          border:2.5px;
          border-color:#ebeced;
          border-style:solid;
        }
      `}</style>
    </ul>
  );
}

export default CardIconsList;