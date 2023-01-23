import React from 'react'
import { Flex, Box, Text, Heading, Button, Icon, Stack, HStack } from "@chakra-ui/react"
import CheckIcon from './CheckIcon'

export const ListItems = (props: StackProps) => {
    const {children, ...rest} = props
  return (
    <HStack as="li" spacing={20} {...rest}>
          <Icon as={CheckIcon} w="22px" h="22px" bg="purple"/>
          <Text>{children}</Text>  
    </HStack>
  )
}

function Pricing() {
    return (
      <Box maxWidth='994px' w="100%" margin="auto" borderRadius="12px" overflow="hidden" mt="-220px">
        <Flex>
            <Box bg="#e8e8e8" p="60px"> 
                <Text fontSize="24px" fontWeight="800">
                    Premium PRO
                </Text>
                <Heading as="h3" fontSize="60px" mt="16px">
                    $329
                </Heading>
                <Text color="#171923" fontSize="18px" fontWeight="500">
                    billed just once
                </Text>
                <Button bg="#6B46c1" color="#fff" size="lg" w="282px" mt="24px">Get Started</Button>
            </Box>
            <Box p="60px"  fontSize="18px" bg="white">
                <Text textAlign="left">
                    Access this features when you get this pricing package business
                </Text>
                <Stack>
                    <ListItems>International calling and messaging Api</ListItems>
                    <ListItems>International calling and messaging Api</ListItems>
                    <ListItems>International calling and messaging Api</ListItems>
                    <ListItems>International calling and messaging Api</ListItems>
                </Stack>
            </Box>
        </Flex>
      </Box>
      
  )
}

export default Pricing