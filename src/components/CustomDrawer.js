import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const CustomDrawer = (props) => {
  const { navigation } = props; // Usa a navegação do drawer diretamente

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      <View style={styles.drawerContent}>
        {/* Avatar e Nome do Usuário */}
        <View style={styles.profileContainer}>
          <Image source={require('../../assets/splash-icon.png')} style={styles.avatar} />
          <Text style={styles.username}>Olá, Usuário</Text>
        </View>

        {/* Itens de navegação */}
        <View style={styles.linksContainer}>
          <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Home')}>
            <Ionicons name="home-outline" size={22} color="#333" />
            <Text style={styles.linkText}>Início</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Profile')}>
            <MaterialIcons name="person-outline" size={22} color="#333" />
            <Text style={styles.linkText}>Perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Now Playing')}>
            <Ionicons name="musical-notes-outline" size={22} color="#333" />
            <Text style={styles.linkText}>Tocando Agora</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Lyrics')}>
            <Ionicons name="document-text-outline" size={22} color="#333" />
            <Text style={styles.linkText}>Letras</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Artist')}>
            <Ionicons name="person-circle-outline" size={22} color="#333" />
            <Text style={styles.linkText}>Artista</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Botão de logout fixado no fim */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Logout')}>
          <MaterialIcons name="logout" size={22} color="red" />
          <Text style={[styles.linkText, { color: 'red' }]}>Sair</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerContent: {
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  linksContainer: {
    marginTop: 10,
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  linkText: {
    fontSize: 16,
    marginLeft: 10,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
});

export default CustomDrawer;