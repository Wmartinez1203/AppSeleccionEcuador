import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  StatusBar, 
  ActivityIndicator, 
  ScrollView, 
  TouchableOpacity,
  Alert 
} from 'react-native';

export default function App() {
  // Estado para controlar el ciclo de vida de la pantalla de bienvenida (Splash Screen)
  const [mostrarSplash, setMostrarSplash] = useState(true);

  // Temporizador asíncrono para cumplir con la duración visible de 3 segundos
  useEffect(() => {
    const temporizador = setTimeout(() => {
      setMostrarSplash(false);
    }, 3000);

    return () => clearTimeout(temporizador);
  }, []);

  // Función interactiva para el botón de la Home Screen
  const mostrarMensajeAliento = () => {
    Alert.alert(
      "¡SÍ SE PUEDE!",
      "Apoyando siempre a la Selección Ecuatoriana de Fútbol. ¡Vamos por la gloria! 🇪🇨⚽",
      [{ text: "¡Entendido!", style: "default" }]
    );
  };

  // -------------------------------------------------------------
  // 2.1 COMPONENTE: SPLASH SCREEN (PANTALLA DE BIENVENIDA)
  // -------------------------------------------------------------
  if (mostrarSplash) {
    return (
      <SafeAreaView style={styles.splashContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#003DA5" />
        
        <View style={styles.splashContent}>
          {/* REQUISITO: Logo oficial centrado en pantalla */}
          <Image 
            source={require('./assets/LogoEcuador.png')} 
            style={styles.splashLogo}
            resizeMode="contain"
          />
          {/* REQUISITO: Texto específico debajo del logo */}
          <Text style={styles.splashTitle}>Ecuador - La Tri</Text>
          <Text style={styles.splashSubtitle}>Federación Ecuatoriana de Fútbol</Text>
          
          <ActivityIndicator size="large" color="#FFCC00" style={styles.splashLoader} />
        </View>
      </SafeAreaView>
    );
  }

  // -------------------------------------------------------------
  // 2.2 COMPONENTE: HOME SCREEN (PANTALLA DE INICIO PRINCIPAL)
  // -------------------------------------------------------------
  return (
    <SafeAreaView style={styles.homeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFCC00" />
      
      {/* REQUISITO: Encabezado o título con el nombre del equipo */}
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>Federación Ecuatoriana de Fútbol</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* REQUISITO: Imagen del escudo o logo de la Selección también en el Home */}
        <View style={styles.homeLogoContainer}>
          <Image 
            source={require('./assets/LogoEcuador.png')} 
            style={styles.homeLogo}
            resizeMode="contain"
          />
          <Text style={styles.homeTeamName}>SELECCIÓN NACIONAL</Text>
        </View>

        {/* REQUISITO: Al menos 3 datos básicos del equipo */}
        <View style={styles.infoCard}>
          <Text style={styles.cardSectionTitle}>Datos del Equipo 🇪🇨</Text>
          <View style={styles.cardDivider} />
          
          <View style={styles.infoRowData}>
            <Text style={styles.boldText}>Confederación:</Text>
            <Text style={styles.normalText}>CONMEBOL</Text>
          </View>
          
          <View style={styles.infoRowData}>
            <Text style={styles.boldText}>Entrenador:</Text>
            <Text style={styles.normalText}>Director Técnico Oficial</Text>
          </View>
          
          <View style={styles.infoRowData}>
            <Text style={styles.boldText}>Estadio Sede:</Text>
            <Text style={styles.normalText}>Estadio Rodrigo Paz Delgado (Quito)</Text>
          </View>
        </View>

        {/* REQUISITO: Botón o elemento interactivo que muestra un mensaje */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.btnInteractivo} onPress={mostrarMensajeAliento}>
            <Text style={styles.btnTexto}>📢 Enviar Mensaje de Aliento</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      {/* Pie de Página Académico */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Desarrollado por: Nando Martínez</Text>
      </View>
    </SafeAreaView>
  );
}

// -------------------------------------------------------------
// ESTILOS VISUALES CONSISTENTES CON LOS COLORES DE LA TRI
// -------------------------------------------------------------
const styles = StyleSheet.create({
  // Splash Screen (Fondo Azul Solicitado #003DA5)
  splashContainer: {
    flex: 1,
    backgroundColor: '#003DA5', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashContent: {
    alignItems: 'center',
    padding: 24,
  },
  splashLogo: {
    width: 190,
    height: 190,
    marginBottom: 20,
  },
  splashTitle: {
    fontSize: 34,
    fontWeight: '900',
    color: '#FFCC00', // Amarillo Tri
    letterSpacing: 1,
  },
  splashSubtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 6,
    opacity: 0.8,
  },
  splashLoader: {
    marginTop: 30,
  },

  // Home Screen (Fondo Gris Premium y detalles Amarillo/Azul)
  homeContainer: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  navbar: {
    backgroundColor: '#FFCC00', // Amarillo Oficial
    paddingVertical: 16,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#003DA5',
  },
  navbarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003DA5',
  },
  scrollContent: {
    paddingBottom: 24,
  },
  homeLogoContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderColor: '#E2E8F0',
  },
  homeLogo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  homeTeamName: {
    fontSize: 16,
    fontWeight: '800',
    color: '#003DA5',
    letterSpacing: 2,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    borderRadius: 14,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  cardSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003DA5',
    marginBottom: 10,
  },
  cardDivider: {
    height: 2,
    backgroundColor: '#F1F5F9',
    marginBottom: 14,
  },
  infoRowData: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'center',
  },
  boldText: {
    fontWeight: '700',
    color: '#1E293B',
    fontSize: 14,
    width: 110,
  },
  normalText: {
    color: '#475569',
    fontSize: 14,
    flex: 1,
  },
  buttonContainer: {
    paddingHorizontal: 16,
    marginTop: 10,
  },
  btnInteractivo: {
    backgroundColor: '#003DA5', // Azul Tri
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#003DA5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  btnTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    paddingVertical: 14,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  footerText: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '500',
  },
});