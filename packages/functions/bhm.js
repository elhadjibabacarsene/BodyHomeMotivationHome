import React from 'react';




function Ucfirst(string)
{
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function replaceUnderscoreToSpace(string){
  return string.replace(/_/g, ' ');
}

function GetRecommandation(string)
{
    return string.split(',')[0];
}
function GetImc(string)
{
    return parseFloat(string.split(',')[1]).toFixed(2);
}

function GetProgramme(string)
{
    return string.split(',')[2];
}


export default {
  Ucfirst,
  GetImc,
  GetProgramme,
  GetRecommandation,
  replaceUnderscoreToSpace
}
