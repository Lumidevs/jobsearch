import {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, ViewBase } from 'react-native'
import {useRouter} from 'expo-router'

import styles from './popularjobs.style'
import {COLORS, SIZES} from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from '../../../hook/useFetch'

const Popularjobs = () => {

  const router = useRouter();

  const {data, isLoading, error} = useFetch('search', {
    query: 'React Developer',
    num_pages: 1
  });

  const [selectedJob, setSelectedJob]= useState();

  const handleCardPress = (item) => {

  }

console.log('data ======================>',data[0])

  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <Text style = {styles.headerBtn}>Show All</Text>
        </TouchableOpacity>

      </View>

      <View style = {styles.cardsContainer}>
        {isLoading ? 
          (<ActivityIndicator size = "large"  colors = {COLORS.primary}/>)  
          : error ? 
          (<Text>Oops!!! Somthing weent wrong</Text>)
          :
          <FlatList
          //data to be rendered in the list
            data = {data}

            //how the data is to be rendered
            renderItem = {({item}) => (
              <PopularJobCard 
                item = {item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}


              />
  )}
            keyExtractor = {item => item?.job_id}
            contentContainerStyle = {{columnGap: SIZES.medium}}
            horizontal
            
          />
        
      }
      </View>
    </View>
  )
}

export default Popularjobs