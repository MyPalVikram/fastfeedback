import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Button,
} from '@chakra-ui/react';

const AddSiteModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();
  const { register, handleSubmit } = useForm();
  const onSubmit = (values) => console.log(values);

  return (
    <>
      <Button
        variant='solid'
        size='md'
        maxW='200px'
        fontWeight='medium'
        onClick={onOpen}
      >
        Add Your First Site
      </Button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as='form' onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader fontWeight='medium'>Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                name='site'
                ref={initialRef}
                placeholder='My site'
                // eslint-disable-next-line react/jsx-no-duplicate-props
                ref={register({ required: true })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                name='url'
                placeholder='https://website.com'
                ref={register({ required: true })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3} fontWeight='medium'>
              Create
            </Button>
            <Button colorScheme='teal' fontWeight='medium' type='submit'>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSiteModal;
