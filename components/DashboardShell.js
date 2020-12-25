import React from 'react';
import {
  Flex,
  Link,
  Stack,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from '@chakra-ui/react';
import DarkModeSwitch from './DarkModeSwitch';
import AppLogo from '../public/AppLogo';
import { useAuth } from '../lib/auth';

const DashboardShell = ({ children }) => {
  const { user } = useAuth();

  return (
    <Flex flexDirection='column'>
      <Flex
        alignItems='center'
        justifyContent='space-between'
        backgroundColor='white'
        py={4}
        px={8}
      >
        <Stack spacing={4} isInline alignItems='center'>
          <AppLogo boxSize={34} />
          <Link>Feedback</Link>
          <Link>Sites</Link>
        </Stack>
        <Flex alignItems='center'>
          <Link pr={4}>Account</Link>
          <Avatar size='sm' mr={4} src={user?.photoURL} />
          <DarkModeSwitch />
        </Flex>
      </Flex>
      <Flex backgroundColor='gray.100' p={8} height='100vh'>
        <Flex
          ml='auto'
          mr='auto'
          maxWidth='800px'
          width='100%'
          direction='column'
        >
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink color='gray.700' fontSize='sm'>
                Sites
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading mb={4}>Sites</Heading>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
