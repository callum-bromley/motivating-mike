import { Box } from '@chakra-ui/react'
import '@fontsource/indie-flower'

export default function Notepad({ children }: { children: React.ReactNode }) {
  return (
    <Box
      bg="yellow.50"
      border="1px solid #ccc"
      borderRadius="md"
      px={4}
      py={2}
      boxShadow="md"
      fontFamily="'Indie Flower', cursive"
      backgroundImage="linear-gradient(to bottom, transparent 29px, #ccc 30px)"
      backgroundSize="100% 30px"
      whiteSpace="pre-wrap"
      width="100%"
      overflowY="auto"
      maxHeight="60vh"
      backgroundAttachment="local"
    >
      {children}
    </Box>
  )
}