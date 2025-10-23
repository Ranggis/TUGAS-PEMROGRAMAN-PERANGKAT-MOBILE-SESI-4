import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [wishlist, setWishlist] = useState<string[]>([]);

  // Data destinasi + screen tujuan
  const destinations = [
    { 
      id: '1',
      name: 'Labuan Bajo',
      image: require('../../assets/image/bajo.png'),
      screen: 'DetailLabuanBajoScreen',
    },
    {
      id: '2',
      name: 'Venezia',
      image: require('../../assets/image/venezia.png'),
      screen: 'DetailVeneziaScreen',
    },
    {
      id: '3',
      name: 'Amsterdam',
      image: require('../../assets/image/amsterdam.png'),
      screen: 'DetailAmsterdamScreen',
    },
  ];

  // Fungsi toggle wishlist
  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#F6F2EA" barStyle="dark-content" />

      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.hiText}>Hi,</Text>
          <Text style={styles.nameText}>Ranggis</Text>
        </View>

        <TouchableOpacity style={styles.heartBtn}>
          <Icon
            name={wishlist.length > 0 ? 'heart' : 'heart-outline'}
            size={26}
            color="#FF7043"
          />
          {wishlist.length > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{wishlist.length}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* BANNER */}
      <TouchableOpacity style={styles.banner}>
        <View style={styles.bannerLeft}>
          <Text style={styles.bannerText}>Plan Your{'\n'}Summer!</Text>
        </View>
        <View style={styles.bannerRight}>
          <Icon name="arrow-forward" size={26} color="#fff" />
        </View>
      </TouchableOpacity>

      {/* SEARCH BAR & FILTER */}
      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Icon name="search-outline" size={20} color="#aaa" />
          <TextInput
            placeholder="Search destination..."
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
        </View>

        <TouchableOpacity style={styles.filterBtn}>
          <Icon name="options-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* SECTION HEADER */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Destination</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* DESTINATIONS */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {destinations.map((item) => (
          <View key={item.id} style={styles.cardContainer}>
            <TouchableOpacity
              style={styles.card}
              activeOpacity={0.9}
              onPress={() => navigation.navigate(item.screen as never)} // 👈 Arahkan sesuai screen
            >
              <Image source={item.image} style={styles.cardImage} />
            </TouchableOpacity>

            {/* Wishlist Button */}
            <TouchableOpacity
              style={styles.wishlistButton}
              onPress={() => toggleWishlist(item.id)}
            >
              <Icon
                name={wishlist.includes(item.id) ? 'heart' : 'heart-outline'}
                size={20}
                color={wishlist.includes(item.id) ? '#fff' : '#fff'}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* BOTTOM NAV */}
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen' as never)}>
          <Icon name="home" size={22} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('TicketScreen' as never)}>
          <Icon name="ticket-outline" size={22} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen' as never)}>
          <Icon name="person-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F2EA',
    paddingHorizontal: 18,
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 40,
  },

  /* HEADER */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  hiText: { fontSize: 16, color: '#777', fontFamily: 'PlusJakartaSans-Regular' },
  nameText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#121212',
    fontFamily: 'PlusJakartaSans-Bold',
  },
  heartBtn: { position: 'relative' },
  badge: {
    position: 'absolute',
    top: 12,
    right: -2,
    backgroundColor: '#000',
    borderRadius: 50,
    paddingHorizontal: 5,
  },
  badgeText: { color: '#fff', fontSize: 10, fontWeight: '700' },

  /* BANNER */
  banner: {
    backgroundColor: '#FF7A00',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  bannerLeft: { flex: 1 },
  bannerText: {
    color: '#fff',
    fontSize: 35,
    fontWeight: '700',
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
  bannerRight: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    width: 45,
    height: 100,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* SEARCH BAR */
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },

  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 100,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginRight: 12, // jarak antar kotak dan tombol
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: '#333',
  },

  filterBtn: {
    backgroundColor: '#121212',
    padding: 12,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* SECTION */
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#111' },
  viewAll: { color: '#777', fontWeight: '600' },

  /* DESTINATION CARD */
  cardContainer: { position: 'relative', marginBottom: 16 },
  card: { borderRadius: 20, overflow: 'hidden' },
  cardImage: { width: '100%', height: 180, borderRadius: 20 },
  wishlistButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(0,0,0,0.35)',
    padding: 8,
    borderRadius: 20,
  },

  /* BOTTOM NAV */
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#131E2E',
    paddingVertical: 23,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
