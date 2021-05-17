import React from 'react';
import api from './Api';


export default function SubscribeUser(values){
  return api.post("/api/users/subscriber",values)
    .then(response => response.data);
}
