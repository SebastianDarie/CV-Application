import React from 'react'
import { ButtonGroup, Flex, IconButton } from '@chakra-ui/core'

const EditableControls = ({ isEditing, onSubmit, onCancel, editHandler }) => {
  return isEditing ? (
    <ButtonGroup mx={10} size='sm'>
      <IconButton icon='check' onClick={onSubmit} />
      <IconButton icon='close' onClick={onCancel} />
    </ButtonGroup>
  ) : (
    <Flex mx={10}>
      <IconButton size='sm' icon='edit' onClick={editHandler}></IconButton>
    </Flex>
  )
}

export default EditableControls
