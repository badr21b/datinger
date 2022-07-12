// @ts-ignore
import {Image, Text, View, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import CardStack, {Card} from 'react-native-card-stack-swiper';
import styles from './styles';
import {RootState} from '../../../dataManagment/store';
import {useDispatch, useSelector} from 'react-redux';
import {swipeUser} from '../../../dataManagment/users/userListSlice';
import {User as userType} from '../../../dataManagment/users/userListSlice';

const SwiperCards = ({}) => {
  const dispatch = useDispatch();
  const cardUsersState = useSelector((state: RootState) => state.userList);
  const [currentCardSwipeDecision, setCurrentCardSwipeDecision] = useState(
    '' as string,
  );
  const [currentCardSwipedProfile, setCurrentCardSwipedProfile] = useState({});

  const handleSwipeDecision = (direction: string, user: userType) => {
    // console.log(direction);
    // console.log(user);
    // setCurrentCardSwipeDecision(direction);
    setCurrentCardSwipedProfile(user);

    dispatch(
      swipeUser({
        userName: user.profile.name,
        decision: direction,
      }),
    );
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
      <CardStack style={styles.content} onSwipe={handleSwipe}>
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

            // </View>
          );
        })}

        {/*<Card style={[styles.card, styles.card1]}>*/}
        {/*  <Text style={styles.label}>A</Text>*/}
        {/*</Card>*/}
        {/*<Card style={[styles.card, styles.card2]}>*/}
        {/*  <Text style={styles.label}>B</Text>*/}
        {/*</Card>*/}
        {/*<Card style={[styles.card, styles.card1]}>*/}
        {/*  <Text style={styles.label}>C</Text>*/}
        {/*</Card>*/}
      </CardStack>
    </View>
  );
};

export default SwiperCards;
