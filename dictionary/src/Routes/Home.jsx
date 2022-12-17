import { Box, Container, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ResultContainer from '../Components/ResultContainer'
import SearchBar from '../Components/SearchBar'
import "../index.css"
import { getWordOfTheDay } from '../redux/WordRedux/action'
const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getWordOfTheDay()) 
    },[])
    return (
        <Box minH='100vh' bgColor={"#161748"} color="white">
            <Box w="70%"  m="auto" pt="2rem" >
                {/* Heading */}
                <Flex justifyContent="center">
                    <Heading className='unbounded' fontWeight={"md"} fontFamily={'cursive'}> The only place success comes before work is in the dictionary.</Heading>
                </Flex>
                {/* Heading */}
                {/* searchBar */}
                <SearchBar />
                {/* searchBar */}
                {/* Results */}
                <ResultContainer />
                {/* Results */}

                
            </Box>
      </Box>
  )
}

export default Home