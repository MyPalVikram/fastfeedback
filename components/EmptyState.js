import React from 'react';
import { Flex, Heading, Text, Button } from '@chakra-ui/react';
import DashboardShell from './DashboardShell';

const EmptyState = () => (
  <DashboardShell>
    <Flex
      width='100%'
      backgroundColor='white'
      borderRadius='8px'
      p={16}
      justify='center'
      direction='column'
      align='center'
    >
      <Heading size='lg' mb={2}>
        You haven't added any sites yet.
      </Heading>
      <Text mb={4}>Welcome! Let's get started!</Text>
      <Button variant='solid' size='md' maxW='200px' fontWeight='medium'>
        Add Your First Site
      </Button>
    </Flex>
  </DashboardShell>
);

export default EmptyState;
