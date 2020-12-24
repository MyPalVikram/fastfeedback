import Head from 'next/head';

import { auth } from 'firebase';
import { useAuth } from '../lib/auth';
import { Button, Heading } from '@chakra-ui/react';

export default function Home() {
  const auth = useAuth();

  return (
    <div>
      <main>
        <Heading>Fast Feedback</Heading>
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
        <div>{auth?.user?.email}</div>
      </main>
    </div>
  );
}
