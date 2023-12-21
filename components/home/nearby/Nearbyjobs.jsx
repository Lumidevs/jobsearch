import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import {useRouter} from 'expo-router'

import styles from './nearbyjobs.style'
import {COLORS} from '../../../constants'
import NearbyJobCard  from '../../common/cards/nearby/NearbyJobCard'
import useFetch from '../../../hook/useFetch'

const NearbyJobs = () => {

  const router = useRouter();

  const {data, isLoading, error} = useFetch('search', {
    query: 'React Developer',
    num_pages: 1
  });

console.log(' nearby data ======================>',data[0])

  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style = {styles.headerBtn}>Show All</Text>
        </TouchableOpacity>

      </View>

      <View style = {styles.cardsContainer}>
        {isLoading ? 
          (<ActivityIndicator size = "large"  colors = {COLORS.primary}/>)  
          : error ? 
          (<Text>Oops!!! Somthing weent wrrong</Text>)
          :
          (
            data.map((job) => (
              <NearbyJobCard
                job={job}
                key={`nearby-job-${job?.job_id}`}
                handleNavigate={() => router.push(`/job-details/${job?.job_id}`)}
              />
            ))
          )
        
      }
      </View>
    </View>
  )
}

export default NearbyJobs