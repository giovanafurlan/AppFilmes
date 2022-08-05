import { 
    SafeAreaView, 
    FlatList, 
    StyleSheet
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Card from '../components/card';

export default function Landing() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() =>{
        fetch(`https://sujeitoprogramador.com/r-api/?api=filmes`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            setFilmes(data);
            console.log(data)
        })
    }, []);
    
 return (
   <SafeAreaView style={styles.container}>
    <FlatList
        style={styles.lista}
        data={filmes}
        renderItem={({item}) => <Card data={item}/>}
        keyExtractor={item => item.id}
        numColumns={1}
        showsVerticalScrollIndicator={false}/>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    lista:{
        width: '90%',
    },
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
}) 
