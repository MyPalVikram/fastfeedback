import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import DashboardShell from './DashboardShell';
import AddSiteModal from './AddSiteModal';

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
      boxShadow='xl'
    >
      <Heading size='lg' mb={2}>
        {"You haven't added any sites yet."}
      </Heading>
      <Text mb={4}>{"Welcome! Let's get started!"}</Text>
      <AddSiteModal />
    </Flex>
  </DashboardShell>
);

export default EmptyState;
