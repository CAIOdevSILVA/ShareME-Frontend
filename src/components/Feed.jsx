import React,{ useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { client } from '../client'
import { feedQuery, searchQuery } from '../utils/data'
import MasonryLayout from './MasonryLayout'
import { FaSadTear } from 'react-icons/fa'
import Spinner from './Spinner'

const Feed = () => {
  const [ loading, setLoading ] = useState(false)
  const [ pins, setPins ] = useState([])
  const { categoryId } = useParams()


  useEffect(() => {
    setLoading(true)
    
    if(categoryId){
      const query = searchQuery(categoryId)

      client.fetch(query)
        .then((data) => {
          setPins(data)
          setLoading(false)
        })
    }else{
      client.fetch(feedQuery)
        .then((data) => {
          setPins(data);
          setLoading(false);
      })
    }
    console.log(categoryId)
  }, [categoryId])
  


  if(loading) return <Spinner message="We are adding new ideas for your feed!"/>

  if(!pins.length) return <div className='flex justify-center items-center w-full'>No Pins Available <FaSadTear /></div>

  return (
    <div>
      {console.log(pins)}
      {pins && <MasonryLayout pins={pins}/>}
    </div>
  )
}

export default Feed