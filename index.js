/*Markup notes 

1. Create a div for the entire card that holds the content i.e. <div class="container">. Set the container to display: flex and flex-direction: column. 

2. Create an additional div for the two buttons and social media icons.  Set each container to display: flex and flex-direection: row. 

3. Wrap the text content in a main tag. 
*/


import React from 'react';
import ReactDOM from 'react-dom';
import BusinessCard from './BusinessCard.js';

ReactDOM.render(<BusinessCard />, document.getElementById('root'))


