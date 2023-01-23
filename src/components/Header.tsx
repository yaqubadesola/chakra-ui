import React from 'react'
import {Box, Heading, Text} from "@chakra-ui/react"
function Header() {
    return (
      <Box as="section" margin="auto" pb="112px">
            <Box   bg="#6B46c1" color="#F7FAFC" textAlign="center" overflow="hidden"  px="32px" pt="90px" pb="198px">
                <Heading fontWeight="800" fontSize="48px">Simple pricing for your business</Heading>
                <Text fontWeight="500"  fontSize="24px">Plans that are currently crafted to suit your business</Text>
            </Box>
      </Box>
      
  )
}

export default Header