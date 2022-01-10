import type { NextPage } from "next";

import React, { useEffect, useState } from "react";
import axios from 'axios';

const Home: NextPage = () => {
  const API_URL = "http://localhost:3065/api";
  const itemId = '10';

  function getData(itemId) {
    console.log(API_URL+`/item/${itemId}`)
    axios.get(API_URL+`/item/${itemId}`).then( res => {
      console.log(res.data);
      // setlist(res.data)
    })
  }
  useEffect(()=> {
    getData(itemId);
  }, [itemId]);

	return (
		<div>
     
			{/* <Counter /> */}
		</div>
	);
};

export default Home;