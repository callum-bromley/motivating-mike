import { Box } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box
      position="absolute"
      bottom={8}
      left="50%"
      transform="translateX(-50%)"
      textAlign="center"
    >
      <p>© 2025 Motivating Mike. All rights reserved.</p>
    </Box>
  )
}
