import React from 'react';
import { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import {
  Link
} from "react-router-dom";
import {Navigate} from 'react-router-dom';

function Profile(){
  const {userId} = useParams();
    return(
    <div>
      Profile
    </div>
  );
}


export default Profile;
