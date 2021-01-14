import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import AppButton from '../components/Button/Button';

const propTypes = {
    props: PropTypes.object,
};

class ReviewQuestion extends React.Component {
constructor(props){
    super(props);

    this.state={
        answerId: 0,
        beerId:  localStorage.getItem('beerId'),
        hide: true,
    };
}
 handleClick = (e) => {
         this.setState({
             hide: false,
         });
         const data = {
             beerId: Number(this.state.beerId),
             answerId: Number(e.target.value)
         };
         console.log(data);
        axios
      .post('https://grudlann-app.herokuapp.com/api/reviews', data, { headers: { 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token')).value}`,'Content-Type': 'application/json', 'Accept': '*/*' }})
      .then(res => console.log(res))
      .catch(err => console.log(err));
        };
    
    render(){

    return ( 
       this.state.hide ? (<div className={styles.wrapper}>
            <h2 className={styles.question}>{this.props.name}</h2>
            {this.props.answers.map(answer => (
               <AppButton text={answer.name} value={answer.lp} onClick={this.handleClick}/>
            ))}
        </div>): null
    );
};
}

ReviewQuestion.propTypes = propTypes;

export default ReviewQuestion;