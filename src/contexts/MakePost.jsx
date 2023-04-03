import React, { createContext, useEffect, useState } from "react";
import initialStore from "../utils/initialStore.js";

function addPost(professor, input, review){
  const post ={
    userId: professor,
    desc: input,
    grade: review
  };
  
  //this is where 
}