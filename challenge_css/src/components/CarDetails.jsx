import React from 'react';
import styles from './CarDetails.module.css';

const CarDetails = ({brand,km,color}) =>{
  return (
    <>
        <ul>
            <li className={styles.li}>Marca:{brand}</li>
            <li>KM:{km}</li>
            <li>Cor:{color}</li>
        </ul>

    </>
  )
}

export default CarDetails;