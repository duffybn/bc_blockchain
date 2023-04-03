import React, { createContext, useEffect, useState } from "react";
import initialStore from "../utils/initialStore.js";

export default function MakePost(professor, input, review){
    const post ={
      userId: professor,
      desc: input,
      grade: review
    };

    //this is where I would sent post out
  }


