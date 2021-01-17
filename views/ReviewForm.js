import React from 'react';
import axios from 'axios';
import image from '../assets/home.png'
import PropTypes from 'prop-types';
import ReviewQuestion from './ReviewQuestion';
import { StyleSheet, Text, View, ImageBackground, TextInput, Alert, ActivityIndicator } from 'react-native';


class ReviewForm extends React.Component {
   
    state = {
        questions: [],
        isLoading: false,
    };
    
     componentDidMount() {
        fetch('https://grudlann-app.herokuapp.com/api/questions/answers', { method: "GET", headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}`, 'Accept': '*/*' }})
        .then((response) => response.json())
        .then((json) => {
            this.setState({ questions: json});
            
            
        })
        
           .catch((error) => console.error(error))
          .finally(() => {
        this.setState({ isLoading: true });
      });
           
    }
  render() { 
     const { questions, isLoading } = this.state;  
    return (
        isLoading ? (
        
        <View style={styles.container}>
             <ImageBackground source={image} style={styles.image}>
                  <Text style={styles.text}>{console.log(questions)} </Text>
                {questions.map(question => 
                    <ReviewQuestion
                        key={question.name}
                        name={question.name}
                        answers={question.answers}
                    />
                )}
            </ImageBackground>
        </View>): null
    );
  };
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
        fontSize: 13,
        fontWeight: "bold",
        textAlign: "center",
        paddingHorizontal: 20,
        marginBottom: 20,
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

export default ReviewForm;