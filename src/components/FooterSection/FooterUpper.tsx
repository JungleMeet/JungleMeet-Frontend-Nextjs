import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Heading,
  Text,
  VisuallyHidden,
  Flex,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';



const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};


export default function LargeWithNewsletter() {
  return (
    <Box>
      <Container as={Stack} maxW={'7xl'} py={4} direction={{ base: 'column', md: 'row' }}
        spacing={5}
        align={{ base: 'center', md: 'center' }} >
        <Flex mt={'50px'} >
          <Stack  maxW='250px'  spacing={6}>
            <Heading fontSize={'md'}>
              About Jungle Meet
            </Heading >
            <Text fontSize={'sm'}>
              Jungle Meet is a place for people to make Movie disscusion, where people come together to share their opinion. We’re also a community pushing for positive change for people.
            </Text >
          </Stack>
          <Spacer w='250px'/>
          <Stack  justify={'center'} align={'center'} spacing={6}>

             <Stack direction={'row'} spacing={10}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack> 
            <Stack  fontSize={'md'} direction={'row'} spacing={5}>
             <Link  href={'#'}>Conditions of Use</Link>
            <Link  href={'#'}>Privacy & Policy</Link>
            </Stack>
          </Stack> 
          <Spacer w='250px'/>
            <Stack align={'flex-start'}>
            <ListHeader>Useful Links</ListHeader>
            <Link href={'#'}>Feature Movie</Link>
            <Link href={'#'}>New Arrival</Link>
            <Link href={'#'}>Disscusion</Link>
            <Link href={'#'}>Contact Us</Link>
          </Stack>
          </Flex>
      </Container>
    </Box>
  );
}