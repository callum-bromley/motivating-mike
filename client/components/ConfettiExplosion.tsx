import { Box } from '@chakra-ui/react'
import ConfettiExplosion from 'react-confetti-explosion'

const ConfettiExplosionEffect = ({ isExploding }: { isExploding: boolean }) => {
  if (!isExploding) return null

  return (
    <>
      <Box position="absolute" left="5" top="50%">
        <ConfettiExplosion force={0.8} particleCount={200} duration={3000} />
      </Box>
      <Box position="absolute" right="5" top="50%">
        <ConfettiExplosion force={0.8} particleCount={200} duration={3000} />
      </Box>
    </>
  )
}

export default ConfettiExplosionEffect
