import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import styles from '../../../styles/mainStyles';
import HeadLineItem from './HeadLineItem';
import HeadLineInput from './HeadLineInput';

const EnterDataBox = props => {
  const [enteredHeadline, setEnteredHeadline] = useState('');
  const [allHeadlines, setAllHeadlines] = useState([]);

  const headlineInputHandler = enteredText => {
    setEnteredHeadline(enteredText);
  };

  const addHeadlineHandler = () => {
    //this will work but the one below makes sure the state is uptodate
    //setAllHeadlines([...allHeadlines, enteredHeadline]);

    //Need to add key for keys on FlatList
    setAllHeadlines(currentHeadlines => [
      ...currentHeadlines,
      {key: Math.random().toString(), value: enteredHeadline},
    ]);
  };

  const removeHeadLine = headlineKey => {
    setAllHeadlines(currentHeadlines => {
      return currentHeadlines.filter(headline => headline.key !== headlineKey);
    });
  };

  return (
    <View style={styles.enterDataBox}>
      {/* <View>
        {allHeadlines.map(headline => (
          <View style={styles.headlineItem} key={headline}>
            <Text>{headline}</Text>
          </View>
        ))}
      </View> */}
      <HeadLineInput
        headlineInputHandlerMethod={headlineInputHandler}
        addHeadlineHandlerMethod={addHeadlineHandler}
      />

      <FlatList
        data={allHeadlines}
        renderItem={itemData => (
          <HeadLineItem
            headline={itemData.item.value}
            onDelete={removeHeadLine.bind(this, itemData.item.key)}
          />
        )}
      />
    </View>
  );
};

export default EnterDataBox;
