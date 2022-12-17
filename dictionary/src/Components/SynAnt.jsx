import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const SynAnt = ({data,role}) => {
  return (
      <Box mt="1rem">
          <Flex>
              <Text fontSize={"xl"} borderBottom="1px solid" mr="0.5rem" fontStyle={"italic"}>{role}:- </Text>
              <Flex gap="1rem">
                  {
                      data.map((item, i) => {
                          if (i <= 4) {
                              if (i+1 == data.length) {
                                  return <Text fontStyle={"italic"} fontSize={"xl"} key={i}>{ item}.</Text>
                                  
                              }
                              else if (i <= 3) {
                                  return <Text fontStyle={"italic"} fontSize={"xl"} key={i}>{ item},</Text>
                              }
                              else {
                                  return <Text fontStyle={"italic"} fontSize={"xl"} key={i}>{ item}.</Text>
                                  
                              }
                          }
                      })
                  }
              </Flex>
          </Flex>
    </Box>
  )
}

export default SynAnt