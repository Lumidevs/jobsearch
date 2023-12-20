import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import {icons, SIZES} from '../../../../constants';


import styles from './popularjobcard.style';

function checkImageUrl(url) {

  if(!url) return false;

  else{
      const imageUrlRegex = new RegExp('^https?:\/\/.*\.(jpeg|jpg|gif|png|bmp|webp)$', 'i');
      console.log('url check response:' + imageUrlRegex.test(url));
return imageUrlRegex.test(url);
  }

}

const PopularJobCard = ({item, selectedJob, handleCardPress}) => {

  // console.log('emploee logo', item.employer_logo);
  return (
    <TouchableOpacity style = {styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style = {styles.logoContainer(selectedJob, item)}>
        <Image 
          source = {{uri: checkImageUrl(item.employer_logo) ? item.employer_logo : 'https://as2.ftcdn.net/v2/jpg/05/05/61/73/1000_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'}}
          resizeMode="contain"
          style={styles.logoImage}
        />
        
      </TouchableOpacity >
      <Text style = {styles.companyName} numberOfLines={1}> {item.employer_name}</Text>
      <View style={styles.infoContainer}>
          <Text style={styles.jobName(selectedJob, item)}
            numberOfLines={1}
          >
              {item.job_title}
          </Text>
          <Text style={styles.location}
          >
              {item.job_country}
          </Text>
      </View>

    </TouchableOpacity>
  )
}

export default PopularJobCard