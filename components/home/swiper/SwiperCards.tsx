// @ts-ignore
import {Image, Text, View} from 'react-native';
import React from 'react';
import CardStack, {Card} from 'react-native-card-stack-swiper';
import styles from './styles';
import {RootState} from '../../../dataManagment/store';
import {useDispatch, useSelector} from 'react-redux';

const SwiperCards = ({}) => {
  const dispatch = useDispatch();
  const cardUsersState = useSelector((state: RootState) => state.userList);

  const handleSwipeDecision = (direction: string, user: object) => {
    console.log(direction);
    console.log(user);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/*@ts-ignore*/}
      <CardStack style={styles.content}>
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
              <Text style={styles.name}>{item.profile.name}</Text>
              <Image
                source={{uri: item.profile.picture}}
                style={[styles.picture]}
              />
            </Card>
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
