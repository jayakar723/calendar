import React from 'react';
import $ from "jquery";


class Calender extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isLoading : true
        }
       
    }
//    componentDidMount(){
//     $('#calendar').calendar();
//    }
  
    render(){
        return(
            <div>
                <div data-provide="calendar">Hi</div>
            </div>
        )
    }
}

export default Calender;