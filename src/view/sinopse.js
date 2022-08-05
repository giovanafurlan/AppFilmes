import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    SafeAreaView 
} from 'react-native';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigation} from '@react-navigation/native'

export default function Sinopse({route}) {

    const navigation = useNavigation();

    return (
    <SafeAreaView>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <Text style={styles.voltar}>
                <AiOutlineArrowLeft/>
                Voltar
            </Text>
        </TouchableOpacity>
        
        <View style={styles.container}>
            <Text style={styles.nome}>
                {route.params.nome}
            </Text>
            <Text style={styles.sinopse}>
                {route.params.sinopse}
            </Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    filmeInfo:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    nome:{
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    container:{
        alignItems: 'center',
        padding: 15
    },
    sinopse:{
        fontSize: 17
    },
    voltar:{
        color:'blue',
        margin: 20,
        fontSize: 15,
        color: 'purple'
    }
})