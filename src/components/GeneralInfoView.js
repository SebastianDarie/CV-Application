import React, { useState } from 'react'
import { Box, Editable, EditableInput, EditablePreview } from '@chakra-ui/core'
import EditableControls from './EditableControls'

const GeneralInfoView = ({ name, email, number }) => {
  const [isEditing, setIsEditing] = useState(false)

  const editHandler = () => {
    setIsEditing(true)
  }

  const onSubmit = () => {
    setIsEditing(false)
  }

  const onCancel = () => {
    setIsEditing(false)
  }

  return (
    <Box
      py={5}
      w='30%'
      display='flex'
      flexDirection='column'
      alignItems='start'
      m='auto'
      boxShadow='md'
    >
      <Box display='flex' flexDirection='row' justifyContent='center' my={4}>
        <Box mx={4}>Name:</Box>
        <Editable
          defaultValue={name}
          isPreviewFocusable={isEditing}
          submitOnBlur={isEditing}
          display='flex'
          flexDirection='row'
          justifyContent='center'
        >
          <EditablePreview />
          <EditableInput />
          <EditableControls
            isEditing={isEditing}
            editHandler={editHandler}
            onSubmit={onSubmit}
            onCancel={onCancel}
          />
        </Editable>
      </Box>

      <Box display='flex' flexDirection='row' justifyContent='center' my={4}>
        <Box mx={4}>Email:</Box>
        <Editable
          defaultValue={email}
          isPreviewFocusable={isEditing}
          submitOnBlur={isEditing}
          display='flex'
          flexDirection='row'
          justifyContent='center'
        >
          <EditablePreview />
          <EditableInput />
          <EditableControls
            isEditing={isEditing}
            editHandler={editHandler}
            onSubmit={onSubmit}
            onCancel={onCancel}
          />
        </Editable>
      </Box>

      <Box display='flex' flexDirection='row' justifyContent='center' my={4}>
        <Box mx={4}>Number:</Box>
        <Editable
          defaultValue={number}
          isPreviewFocusable={isEditing}
          submitOnBlur={isEditing}
          display='flex'
          flexDirection='row'
          justifyContent='center'
        >
          <EditablePreview />
          <EditableInput />
          <EditableControls
            isEditing={isEditing}
            editHandler={editHandler}
            onSubmit={onSubmit}
            onCancel={onCancel}
          />
        </Editable>
      </Box>
    </Box>
  )
}

export default GeneralInfoView
