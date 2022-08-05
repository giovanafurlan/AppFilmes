import { 
    View, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    Image 
} from 'react-native';
import {useNavigation} from '@react-navigation/native'

export default function FilmeCard({data}) {

    const navigation = useNavigation();

    function dados(){
        navigation.navigate('Sinopse', {nome: data.nome, sinopse: data.sinopse})
    }

 return (
    <View 
        style={styles.filme}>
        <View 
            style={styles.card}>
            <Text 
                style={styles.titulo}>
                {data.nome}
            </Text>
            <TouchableOpacity 
                onPress={dados}>
                <Text style={styles.text}>
                    Leia Mais
                </Text>
            </TouchableOpacity>
        </View>
        <Image 
            style={styles.img} 
            source={{uri: data.foto}}/>   
    </View>
  );
}

const styles = StyleSheet.create({
    card:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    img:{
        width: '100%',
        height: 300,
        borderRadius: 5
    },
    titulo:{
        fontWeight: 'bold',
        fontSize: 20,
        margin: 15
    },
    filme:{
        flex: 1,
        marginBottom: 20
    },
    text:{
        color: 'purple',
        fontSize: 16
    }
})