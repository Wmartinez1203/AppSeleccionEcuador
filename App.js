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
  TouchableOpacity 
} from 'react-native';

export default function App() {
  // Estado para controlar el ciclo de vida de la pantalla de bienvenida (Splash Screen)
  const [mostrarSplash, setMostrarSplash] = useState(true);

  // Temporizador asíncrono para simular la precarga de recursos (3 segundos)
  useEffect(() => {
    const temporizador = setTimeout(() => {
      setMostrarSplash(false);
    }, 3000);

    // Limpieza del efecto para prevenir fugas de memoria
    return () => clearTimeout(temporizador);
  }, []);

  // -------------------------------------------------------------
  // 1. COMPONENTE: SPLASH SCREEN (PANTALLA DE BIENVENIDA)
  // -------------------------------------------------------------
  if (mostrarSplash) {
    return (
      <SafeAreaView style={styles.splashContainer}>
        {/* Barra de estado adaptada al tono oscuro institucional */}
        <StatusBar barStyle="light-content" backgroundColor="#002447" />
        
        <View style={styles.splashContent}>
          {/* Logo Oficial de la Federación Ecuatoriana de Fútbol (FEF) */}
          <Image 
            source={{ uri: 'https://images.vavel.com/f/fef-logo-725354922.png' }} 
            style={styles.splashLogo}
            resizeMode="contain"
          />
          <Text style={styles.splashTitle}>LA TRI</Text>
          <Text style={styles.splashSubtitle}>Federación Ecuatoriana de Fútbol</Text>
          
          {/* Feedback de carga interactiva */}
          <ActivityIndicator size="large" color="#FFCC00" style={styles.splashLoader} />
        </View>
      </SafeAreaView>
    );
  }

  // -------------------------------------------------------------
  // 2. COMPONENTE: HOME SCREEN (PANTALLA DE INICIO)
  // -------------------------------------------------------------
  return (
    <SafeAreaView style={styles.homeContainer}>
      {/* Barra de estado adaptada al tono corporativo superior */}
      <StatusBar barStyle="dark-content" backgroundColor="#FFCC00" />
      
      {/* Cabecera de la Aplicación (Navbar) */}
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>Ecuador - Selección Oficial</Text>
      </View>

      {/* Contenedor con Scroll para prevenir desbordamientos en pantallas compactas */}
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Banner Representativo de la Selección */}
        <Image 
          source={{ uri: 'https://www.fef.ec/wp-content/uploads/2023/09/PORTADA-CONVOCADOS-WEB.jpg' }} 
          style={styles.homeBanner}
          resizeMode="cover"
        />

        {/* Tarjeta de Información General */}
        <View style={styles.infoCard}>
          <Text style={styles.cardSectionTitle}>Información Institucional 🇪🇨</Text>
          <View style={styles.cardDivider} />
          
          <View style={styles.infoRowData}>
            <Text style={styles.boldText}>Apodo oficial:</Text>
            <Text style={styles.normalText}> La Tri / La Tricolor</Text>
          </View>
          
          <View style={styles.infoRowData}>
            <Text style={styles.boldText}>Organismo:</Text>
            <Text style={styles.normalText}> Fed. Ecuatoriana de Fútbol (FEF)</Text>
          </View>
          
          <View style={styles.infoRowData}>
            <Text style={styles.boldText}>Confederación:</Text>
            <Text style={styles.normalText}> CONMEBOL</Text>
          </View>
          
          <View style={styles.infoRowData}>
            <Text style={styles.boldText}>Estadio Sede:</Text>
            <Text style={styles.normalText}> Rodrigo Paz Delgado (Quito)</Text>
          </View>
        </View>

        {/* Sección de Hitos Históricos */}
        <Text style={styles.sectionTitle}>Grandes Hitos Históricos</Text>
        
        {/* Item Histórico 1 */}
        <View style={styles.hitoContainer}>
          <View style={styles.hitoBadge}>
            <Text style={styles.hitoIcon}>🏆</Text>
          </View>
          <View style={styles.hitoTextContent}>
            <Text style={styles.hitoTitle}>Asistencias Mundialistas</Text>
            <Text style={styles.hitoDesc}>Corea-Japón 2002, Alemania 2006, Brasil 2014, y Qatar 2022.</Text>
          </View>
        </View>

        {/* Item Histórico 2 */}
        <View style={styles.hitoContainer}>
          <View style={styles.hitoBadge}>
            <Text style={styles.hitoIcon}>⭐</Text>
          </View>
          <View style={styles.hitoTextContent}>
            <Text style={styles.hitoTitle}>Máximo Logro en Copas del Mundo</Text>
            <Text style={styles.hitoDesc}>Clasificación histórica a Octavos de Final en Alemania 2006.</Text>
          </View>
        </View>

      </ScrollView>

      {/* Pie de Página Académico Institucional */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Desarrollado por: Nando Martínez</Text>
      </View>
    </SafeAreaView>
  );
}

// -------------------------------------------------------------
// 3. HOJA DE ESTILOS PROFESIONALES (STYLESHEET)
// -------------------------------------------------------------
const styles = StyleSheet.create({
  // Estilos dedicados de la Splash Screen
  splashContainer: {
    flex: 1,
    backgroundColor: '#002447', // Azul marino oficial
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashContent: {
    alignItems: 'center',
    padding: 24,
  },
  splashLogo: {
    width: 180,
    height: 180,
    marginBottom: 24,
  },
  splashTitle: {
    fontSize: 38,
    fontWeight: '900',
    color: '#FFCC00', // Amarillo Oro Ecuador
    letterSpacing: 3,
  },
  splashSubtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 6,
    opacity: 0.7,
    fontWeight: '500',
  },
  splashLoader: {
    marginTop: 32,
  },

  // Estilos dedicados de la Home Screen
  homeContainer: {
    flex: 1,
    backgroundColor: '#F8FAFC', // Fondo gris claro premium
  },
  navbar: {
    backgroundColor: '#FFCC00',
    paddingVertical: 16,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#002447',
  },
  navbarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#002447',
  },
  scrollContent: {
    paddingBottom: 24,
  },
  homeBanner: {
    width: '100%',
    height: 190,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    borderRadius: 14,
    padding: 20,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3, // Sombras nativas para dispositivos Android
  },
  cardSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#002447',
    marginBottom: 10,
  },
  cardDivider: {
    height: 2,
    backgroundColor: '#F1F5F9',
    marginBottom: 14,
  },
  infoRowData: {
    flexDirection: 'row',
    marginBottom: 10,
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#002447',
    marginLeft: 16,
    marginTop: 8,
    marginBottom: 12,
  },
  hitoContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  hitoBadge: {
    backgroundColor: '#F8FAFC',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hitoIcon: {
    fontSize: 22,
  },
  hitoTextContent: {
    flex: 1,
    marginLeft: 14,
  },
  hitoTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  hitoDesc: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 4,
    lineHeight: 16,
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