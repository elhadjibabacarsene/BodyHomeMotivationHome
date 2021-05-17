import React from 'react';
import api from './Api';


export default function getResultRecomandation(state){
  return api.post("/api/programmes/recommandation",state)
    .then(response => response.data);
}
