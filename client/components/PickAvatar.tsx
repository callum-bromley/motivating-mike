import { useNavigate } from 'react-router-dom'
import { Box, Circle, Image, Text, VStack, HStack } from '@chakra-ui/react'

const PickAvatar = () => {
  const navigate = useNavigate()

  const handleSelect = (category: string) => {
    navigate('/todos', { state: { category } })
  }

  const options = [
    { label: 'Personal', image: '/', category: 'personal' },
    { label: 'Work', image: '/', category: 'work' },
    { label: 'Study', image: '/', category: 'study' },
  ]

  return (
    <HStack spacing={8} justify="center" mt={10}>
      {options.map((option) => (
        <VStack
          key={option.category}
          onClick={() => handleSelect(option.category)}
          cursor="pointer"
          role="group"
        >
          <Circle
            size="100px"
            bg="gray.100"
            overflow="hidden"
            boxShadow="md"
            _groupHover={{ boxShadow: 'xl' }}
          >
            <Image
              src={option.image}
              alt={option.label}
              boxSize="100%"
              objectFit="cover"
            />
          </Circle>
          <Text>{option.label}</Text>
        </VStack>
      ))}
    </HStack>
  )
}

export default PickAvatar
