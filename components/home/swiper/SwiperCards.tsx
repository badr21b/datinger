// @ts-ignore
import {Image, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CardStack, {Card} from 'react-native-card-stack-swiper';
import styles from './styles';
import {RootState} from '../../../data/store';
import {useDispatch, useSelector} from 'react-redux';
import {swipeUser} from '../../../data/users/userListSlice';
import {User as userType} from '../../../data/users/userListSlice';
import NoCards from './NoCards';
import SwipeArrowButton from './SwipeArrowButton';

const SwiperCards = ({}) => {
  const dispatch = useDispatch();
  const cardUsersState = useSelector((state: RootState) => state.userList);
  const [currentCardSwipeDecision, setCurrentCardSwipeDecision] = useState(
    '' as string,
  );
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  //const [blockSwiping, setBlockSwiping] = useState(false);

  const handleSwipeDecision = (direction: string, user: userType) => {
    dispatch(
      swipeUser({
        userName: user.profile.name,
        decision: direction,
      }),
    );
  };
  const handleRefreshList = () => {
    setCurrentCardIndex(0);
  };

  useEffect(() => {
    setTimeout(() => {
      return setCurrentCardSwipeDecision('');
    }, 500);
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
    return <NoCards />;
  };

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
        initialIndex={currentCardIndex}>
        {cardUsersState.users.map((item, key) => {
          return (
            // @ts-ignore
            <Card
              onSwipedRight={() => {
                handleSwipeDecision('right', item);
              }}
              onSwipedLeft={() => {
                handleSwipeDecision('left', item);
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

      <View style={styles.actionButtonsContainer}>
        <SwipeArrowButton
          color={'#e91e63'}
          direction={'left'}
          setCurrentCardSwipeDecision={setCurrentCardSwipeDecision}
        />
        {/*<TouchableOpacity*/}
        {/*  onPress={() => {*/}
        {/*    setCurrentCardIndex(0);*/}
        {/*  }}>*/}
        {/*  <Text>Return</Text>*/}
        {/*</TouchableOpacity>*/}

        <SwipeArrowButton
          color={'#01df8a'}
          direction={'right'}
          setCurrentCardSwipeDecision={setCurrentCardSwipeDecision}
        />
      </View>
    </View>
  );
};

export default SwiperCards;
