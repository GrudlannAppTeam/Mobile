import React from 'react';
import axios from 'axios';
import image from '../assets/home.png'
import PropTypes from 'prop-types';
import AppButton from '../components/Button/Button';
import { StyleSheet, Text, View, ImageBackground, TextInput, Alert, ActivityIndicator } from 'react-native';



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
      .post('https://grudlann-app.herokuapp.com/api/reviews', data, { headers: { 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`,'Content-Type': 'application/json', 'Accept': '*/*' }})
      .then(res => console.log(res))
      .catch(err => console.log(err));
        };
    
    render(){

    return ( 
       this.state.hide ? (<View style={styles.container}>
            <Text style={styles.text}> {this.props.name}</Text>
            {this.props.answers.map(answer => 
               <AppButton disabled={false} key={answer.lp} title={answer.name}  onPress={this.handleClick}/>
        )}
        </View>): null
    );
};
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%'
    },
    text: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        paddingHorizontal: 20,
        marginBottom: 30,
        marginTop: 30,
    },
    input: {
        borderColor: 'white',
        borderWidth: 2,
        marginHorizontal: 30,
        color: 'white',
        padding: 10,
        marginTop: 20,
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});


export default ReviewQuestion;