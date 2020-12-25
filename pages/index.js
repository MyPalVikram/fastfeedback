import Head from 'next/head';
import { auth } from 'firebase';
import { Button, Flex, Heading, Icon } from '@chakra-ui/react';

import { useAuth } from '../lib/auth';
import DarkModeSwitch from '../components/DarkModeSwitch';
import AppLogo from '../public/AppLogo';

export default function Home() {
  const auth = useAuth();

  return (
    <Flex
      as='main'
      direction='column'
      align='center'
      justify='center'
      h='100vh'
    >
      <AppLogo color='black.500' boxSize='32px' />
      <DarkModeSwitch />
      {auth.user ? (
        <Button
          colorScheme='red'
          variant='solid'
          fontWeight='medium'
          onClick={(e) => auth.signout()}
        >
          Sign Out
        </Button>
      ) : (
        <Button
          colorScheme='green'
          variant='solid'
          fontWeight='medium'
          onClick={(e) => auth.signinWithGithub()}
        >
          Sign In
        </Button>
      )}
      {auth.user && <div>{auth.user.email}</div>}
    </Flex>
  );
}
