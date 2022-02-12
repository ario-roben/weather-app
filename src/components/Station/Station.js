
import React, { Component } from 'react';
import { Loading } from "../Loading/Loading";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import './Station.css';

const RenderCard = ({ item, isLoading ,errMess }) => {
     if(isLoading){
         return(
             <Loading></Loading>
         );
     }else if(errMess){
         return(
             <h4>{errMess}</h4>
         );
     }
  else
     return (
         <Card>
            <img  src={require('../../assets/images/3.png')} class="card-img-top" alt="..."></img>
             <CardBody >
                 <CardTitle> <b>{item.name} TimeZone : {item.timeZone}</b> </CardTitle>
                 {item.timeZone ? <CardSubtitle></CardSubtitle> : null}
                 
                 <CardText>Id : {item.id} --- Type : {item.stationType}</CardText>
             </CardBody>
         </Card>
     );
 }

class Station extends Component {
     constructor(props) {
          super(props);
     }
     

     render() {
          return (
               <div className=' col-4 col-sm-12 col-md-4 p-2'>
                    <div className='p-2 station'>
                         <RenderCard item={this.props.station} 
                                     isLoading={this.props.station.isLoading}
                                     isLoading={this.props.station.errMess}
                         />
              
                    </div>
               </div>
          )
     }
}
export default Station;