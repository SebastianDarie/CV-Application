import React, { useState } from 'react'
import { Box, Editable, EditableInput, EditablePreview } from '@chakra-ui/core'
import EditableControls from './EditableControls'

const EducationalInfoView = ({
  companyName,
  positionTitle,
  mainTasks,
  beginDate,
  endDate,
}) => {
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
        <Box mx={4}>Company Name:</Box>
        <Editable
          defaultValue={companyName}
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
        <Box mx={4}>Position Title:</Box>
        <Editable
          defaultValue={positionTitle}
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
        <Box mx={4}>Main Tasks:</Box>
        <Editable
          defaultValue={mainTasks}
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
        <Box mx={4}>Date of Employment:</Box>
        <Editable
          defaultValue={beginDate}
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
        <Box mx={4}>Due Date:</Box>
        <Editable
          defaultValue={endDate}
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

export default EducationalInfoView
