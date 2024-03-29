// @ts-ignore
import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CardStack, {Card} from 'react-native-card-stack-swiper';
import styles from './styles';
import {RootState} from '../../../data/store';
import {useDispatch, useSelector} from 'react-redux';
import {swipeUser} from '../../../data/users/userListSlice';
import {User as userType} from '../../../data/users/userListSlice';
import NoCards from './NoCards';
import SwipeArrowButton from './SwipeArrowButton';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SwiperCards = ({}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cardUsersState = useSelector((state: RootState) => state.userList);
  const [currentCardSwipeDecision, setCurrentCardSwipeDecision] = useState(
    '' as string,
  );
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  // const [currentUserObject, setCurrentUserObject] = useState({});
  //const [blockSwiping, setBlockSwiping] = useState(false);

  const [usersList, setUsersList] = useState(cardUsersState.users);
  const [showButtons, setShowButtons] = useState(true);
  const [loop, setLoop] = useState(true);

  const handleSwipeDecision = (direction: string, user: userType) => {
    dispatch(
      swipeUser({
        userName: user.profile.name,
        decision: direction,
      }),
    );
  };
  const handleRefreshList = () => {
    // setShowButtons(false);
    // setUsersList(cardUsersState.users)
    // setLoop(true)
  };

  useEffect(() => {
    console.log('new list ');
    console.log(cardUsersState.users);
    setUsersList(cardUsersState.users);
    // setCurrentCardIndex(currentCardIndex + 1 )
  }, [cardUsersState]);

  useEffect(() => {
    setTimeout(() => {
      return setCurrentCardSwipeDecision('');
    }, 100);
  }, [currentCardSwipeDecision]);

  const handleSwipe = (event: any) => {
    if (event > 0) {
      setCurrentCardSwipeDecision('right');
    } else if (event < 0) {
      setCurrentCardSwipeDecision('left');
    }
  };
  const handleNoMoreCards = () => {
    //setBlockSwiping(true);
    // setShowButtons(false);
    setCurrentCardIndex(0);
    return <NoCards handleRefreshList={handleRefreshList} />;
  };
  const handleCardIndex = () => {
    // setCurrentCardIndex(currentCardIndex + 1);
    // setTimeout(() => {
    //   console.log(currentCardIndex);
    // }, 5000);
  };

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={styles.cardSwiperContainer}>
      {/* Like text */}
      <View style={styles.swipeDecisionTextContainer}>
        {currentCardSwipeDecision === 'left' && (
          <Text
            style={[
              //  @ts-ignore
              styles.swipeDecisionTextContainer.swipeDecisionText,
              styles.rotateLeft,
              {color: '#fd267d', borderColor: '#fd267d'},
            ]}>
            Unlike
          </Text>
        )}

        {currentCardSwipeDecision === 'right' && (
          <Text
            style={[
              //  @ts-ignore
              styles.swipeDecisionTextContainer.swipeDecisionText,
              styles.rotateRight,
              {color: '#01df8a', borderColor: '#01df8a'},
            ]}>
            Like!
          </Text>
        )}
      </View>

      {/*@ts-ignore*/}
      <CardStack
        ref={swiper => {
          // @ts-ignore
          this.swiper = swiper;
        }}
        style={styles.content}
        onSwipe={handleSwipe}
        renderNoMoreCards={handleNoMoreCards}
        onSwipedAll={handleRefreshList}
        initialIndex={currentCardIndex}
        loop={loop}
        onSwiped={index => {
          setCurrentCardIndex(index + 1);
        }}>
        {usersList.map((item, key) => {
          return (
            // @ts-ignore
            <Card
              onSwipedRight={() => {
                handleCardIndex();
                handleSwipeDecision('right', item);
                // setCurrentUserObject(item);
              }}
              onSwipedLeft={() => {
                handleSwipeDecision('left', item);
                // setCurrentUserObject(item);
              }}
              key={key}
              style={[styles.card, styles.card1]}>
              <View style={styles.profileInfoContainer}>
                <Text style={styles.nameAgeText}>
                  {item.profile.name}, {item.profile.age}
                </Text>
                <Text style={styles.onlineStatus}>Recently online</Text>
              </View>

              <Image
                source={{uri: item.profile.picture}}
                style={[styles.picture]}
              />
            </Card>
          );
        })}
      </CardStack>

      {(showButtons) && (
          <View style={styles.actionButtonsContainer}>
            <SwipeArrowButton
                color={'#e91e63'}
                direction={'left'}
                setCurrentCardSwipeDecision={setCurrentCardSwipeDecision}
            />
            <TouchableOpacity
                onPress={() => {
                  //setCurrentCardIndex(0);
                  console.log('current index' + currentCardIndex);
                  // @ts-ignore
                  navigation.navigate('Profile', {
                    user: cardUsersState.users[currentCardIndex],
                  });
                }}>
              <View style={styles.profileButton}>
                <MaterialCommunityIcons
                    name="account"
                    color={'#ffffff'}
                    size={24}
                />
              </View>
            </TouchableOpacity>

            <SwipeArrowButton
                color={'#01df8a'}
                direction={'right'}
                setCurrentCardSwipeDecision={setCurrentCardSwipeDecision}
            />
          </View>
      )}

    </View>
  );
};

export default SwiperCards;
