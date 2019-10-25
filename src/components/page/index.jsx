import React from 'react';
import Card from '../card';
import PropTypes from 'prop-types';
const Page = (props) => {
let cardInfo ={
    url: 'https://cs8.pikabu.ru/post_img/big/2017/01/30/9/148578502912156619.jpg',
    title: 'Заголовок',
    descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eum rerum delectus tempore fugiat molestias quibusdam at iste et sunt quisquam nostrum, nihil exercitationem dicta facere ea mollitia. Unde, harum.',
    statusBtn: false,
}

    return ( 
        <div className="container">
            <div className ="row">

                <div className="col-4">
                    <Card cardParametrs={cardInfo} />    
                </div>
                <div className="col-4">
                    <Card cardParametrs={cardInfo}/>  
                </div>
                <div className="col-4">
                    <Card cardParametrs={cardInfo}/>  
                </div>
                


            </div>
            
        </div>
     );
}
 
export default Page;