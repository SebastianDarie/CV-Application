import React, { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from '@chakra-ui/core'
import { Formik } from 'formik'
import * as Yup from 'yup'
import EducationalInfoView from './EducationalInfoView'

const EducationalForm = () => {
  const initialValues = { schoolName: '', titleStudy: '', date: '' }

  const [formValues, setFormValues] = useState(initialValues)
  const [showForm, setShowForm] = useState(true)

  return showForm ? (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        titleStudy: Yup.string()
          .max(10, 'Must be 10 characters or less')
          .required('Required'),
        schoolName: Yup.string()
          .max(25, 'Must be 25 characters or less')
          .required('Required'),
        date: Yup.string().required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true)
        setFormValues(values)
        setShowForm(false)
      }}
    >
      {(formik) => (
        <Box
          py={5}
          w='20%'
          display='flex'
          justifyContent='center'
          alignItems='center'
          m='auto'
          boxShadow='md'
        >
          <form onSubmit={formik.handleSubmit}>
            <FormControl
              isRequired
              isInvalid={formik.errors.schoolName && formik.touched.schoolName}
            >
              <FormLabel my={1} htmlFor='schoolName'>
                School Name
              </FormLabel>
              <Input
                id='schoolName'
                name='schoolName'
                type='text'
                placeholder='School Name'
                {...formik.getFieldProps('schoolName')}
              />
              <FormErrorMessage>{formik.errors.schoolName}</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={formik.errors.titleStudy && formik.touched.titleStudy}
            >
              <FormLabel my={1} htmlFor='titleStudy'>
                Title of Study
              </FormLabel>
              <Input
                id='titleStudy'
                name='titleStudy'
                type='text'
                placeholder='Title of Study'
                {...formik.getFieldProps('titleStudy')}
              />
              <FormErrorMessage>{formik.errors.titleStudy}</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={formik.errors.date && formik.touched.date}
            >
              <FormLabel my={1} htmlFor='date'>
                Date of Study
              </FormLabel>
              <Input
                id='date'
                name='date'
                type='date'
                {...formik.getFieldProps('date')}
              />
              <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
            </FormControl>

            <Button
              ml={50}
              my={4}
              variantColor='teal'
              type='submit'
              isLoading={formik.isSubmitting}
            >
              Add Info
            </Button>
          </form>
        </Box>
      )}
    </Formik>
  ) : (
    <EducationalInfoView
      schoolName={formValues.schoolName}
      titleStudy={formValues.titleStudy}
      date={formValues.date}
    />
  )
}

export default EducationalForm
