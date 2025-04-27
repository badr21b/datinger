import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

interface User {
  id: number;
  name: string;
  age: number;
  bio: string;
  image: string;
  distance?: string;
  occupation?: string;
}

// Sample user data for testing
const users: User[] = [
  {
    id: 1,
    name: 'Jhon Johnson',
    age: 28,
    bio: 'Software developer who loves hiking and photography',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    distance: '1 km',
    occupation: 'Software Developer'
  },
  {
    id: 2,
    name: 'Jessica Parker',
    age: 23,
    bio: 'Professional model',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    distance: '1 km',
    occupation: 'Professional model'
  },
  {
    id: 3,
    name: 'Michael Chen',
    age: 31,
    bio: 'Fitness coach and nutrition enthusiast',
    image: 'https://randomuser.me/api/portraits/men/67.jpg',
    distance: '3 km',
    occupation: 'Fitness Coach'
  },
  {
    id: 4,
    name: 'Emma Wilson',
    age: 26,
    bio: 'Digital nomad, travel blogger, yoga instructor',
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
    distance: '2 km',
    occupation: 'Travel Blogger'
  },
  {
    id: 5,
    name: 'David Kim',
    age: 30,
    bio: 'Chef, food lover, looking for someone to share meals with',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    distance: '5 km',
    occupation: 'Chef'
  },
];

const TeamMatchingScreen = () => {
  const [index, setIndex] = useState(0);
  const [matches, setMatches] = useState<number[]>([]);
  const swiperRef = useRef<Swiper<User>>(null);

  const handleSwipe = (cardIndex: number, direction: 'left' | 'right') => {
    if (direction === 'right' && cardIndex < users.length && users[cardIndex]) {
      setMatches([...matches, users[cardIndex].id]);
    }
  };

  const handleLike = () => {
    if (swiperRef.current) {
      swiperRef.current.swipeRight();
    }
  };

  const handleDislike = () => {
    if (swiperRef.current) {
      swiperRef.current.swipeLeft();
    }
  };

  const handleSuperLike = () => {
    if (swiperRef.current) {
      swiperRef.current.swipeTop();
    }
  };

  const renderPaginationDots = () => {
    return (
      <View style={styles.paginationContainer}>
        {[...Array(5)].map((_, i) => (
          <View 
            key={i} 
            style={[
              styles.paginationDot, 
              i === index % 5 ? styles.paginationDotActive : {}
            ]} 
          />
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#F95E6A" />
        </TouchableOpacity>
        
        <View style={styles.titleContainer}>
          <Text style={styles.headerTitle}>Discover</Text>
          <Text style={styles.headerSubtitle}>Chicago, IL</Text>
        </View>
        
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="options-outline" size={24} color="#F95E6A" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.swiperContainer}>
        <Swiper
          ref={swiperRef}
          cards={users}
          renderCard={(card: User) => (
            <View style={styles.card}>
              <Image source={{ uri: card.image }} style={styles.cardImage} />
              
              <View style={styles.distanceContainer}>
                <Ionicons name="location" size={14} color="white" />
                <Text style={styles.distanceText}>{card.distance}</Text>
              </View>
              
              {renderPaginationDots()}
              
              <View style={styles.cardInfo}>
                <Text style={styles.cardName}>{card.name}, {card.age}</Text>
                <Text style={styles.cardBio}>{card.occupation}</Text>
              </View>
            </View>
          )}
          onSwiped={(cardIndex) => setIndex(cardIndex + 1)}
          onSwipedLeft={(cardIndex) => handleSwipe(cardIndex, 'left')}
          onSwipedRight={(cardIndex) => handleSwipe(cardIndex, 'right')}
          cardIndex={index}
          backgroundColor={'transparent'}
          stackSize={3}
          infinite
          showSecondCard
          animateOverlayLabelsOpacity
          disableTopSwipe={false}
          disableBottomSwipe
          overlayLabels={{
            left: {
              title: 'NOPE',
              style: {
                label: {
                  backgroundColor: 'transparent',
                  color: 'red',
                  fontSize: 24,
                  fontWeight: 'bold',
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: -30,
                }
              }
            },
            right: {
              title: 'LIKE',
              style: {
                label: {
                  backgroundColor: 'transparent',
                  color: '#4DED30',
                  fontSize: 24,
                  fontWeight: 'bold',
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: 30,
                }
              }
            },
            top: {
              title: 'SUPER LIKE',
              style: {
                label: {
                  backgroundColor: 'transparent',
                  color: '#7B50C7',
                  fontSize: 24,
                  fontWeight: 'bold',
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }
              }
            }
          }}
        />
      </View>
      
      <View style={styles.footer}>
        <TouchableOpacity style={styles.circleButton} onPress={handleDislike}>
          <Ionicons name="close" size={30} color="#F27121" />
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.circleButton, styles.likeButton]} onPress={handleLike}>
          <Ionicons name="heart" size={30} color="white" />
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.circleButton, styles.superLikeButton]} onPress={handleSuperLike}>
          <Ionicons name="star" size={24} color="white" />
        </TouchableOpacity>
      </View>
      
      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <View style={styles.tabBarDivider} />
        <View style={styles.tabBarContent}>
          <TouchableOpacity style={styles.tabBarItem}>
            <MaterialCommunityIcons name="cards" size={24} color="#F95E6A" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.tabBarItem}>
            <Ionicons name="ios-heart-circle" size={24} color="#8E8E8E" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.tabBarItem}>
            <Ionicons name="chatbubble-ellipses" size={24} color="#8E8E8E" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.tabBarItem}>
            <Ionicons name="person" size={24} color="#8E8E8E" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
  },
  titleContainer: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  filterButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
  },
  swiperContainer: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 20,
    marginBottom: 15,
  },
  card: {
    height: height * 0.68,
    borderRadius: 12,
    backgroundColor: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  distanceContainer: {
    position: 'absolute',
    top: 12,
    left: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  distanceText: {
    color: 'white',
    fontSize: 12,
    marginLeft: 4,
    fontWeight: '500',
  },
  paginationContainer: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -50 }],
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginVertical: 3,
  },
  paginationDotActive: {
    backgroundColor: '#fff',
  },
  cardInfo: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  cardName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  cardBio: {
    fontSize: 16,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  circleButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
  },
  likeButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#F95E6A',
  },
  superLikeButton: {
    backgroundColor: '#7B50C7',
  },
  tabBar: {
    backgroundColor: '#fff',
    paddingBottom: 30,
  },
  tabBarDivider: {
    height: 1,
    backgroundColor: '#E5E5E5',
    marginBottom: 10,
  },
  tabBarContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  tabBarItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TeamMatchingScreen;
