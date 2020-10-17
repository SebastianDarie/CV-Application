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
import PracticalInfoView from './PracticalInfoView'

const PracticalExpForm = () => {
  const initialValues = {
    companyName: '',
    positionTitle: '',
    mainTasks: '',
    beginDate: '',
    endDate: '',
  }

  const [formValues, setFormValues] = useState(initialValues)
  const [showForm, setShowForm] = useState(true)

  return showForm ? (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        positionTitle: Yup.string()
          .max(10, 'Must be 10 characters or less')
          .required('Required'),
        companyName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        mainTasks: Yup.string()
          .max(25, 'Must be 25 characters or less')
          .required('Required'),
        beginDate: Yup.string().required('Required'),
        endDate: Yup.string().required('Required'),
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
              isInvalid={
                formik.errors.companyName && formik.touched.companyName
              }
            >
              <FormLabel my={1} htmlFor='companyName'>
                Company Name
              </FormLabel>
              <Input
                id='companyName'
                name='companyName'
                type='text'
                placeholder='ex. Google, Apple'
                {...formik.getFieldProps('companyName')}
              />
              <FormErrorMessage>{formik.errors.companyName}</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={
                formik.errors.positionTitle && formik.touched.positionTitle
              }
            >
              <FormLabel my={1} htmlFor='positionTitle'>
                Position Title
              </FormLabel>
              <Input
                id='positionTitle'
                name='positionTitle'
                type='text'
                placeholder='Position Title'
                {...formik.getFieldProps('positionTitle')}
              />
              <FormErrorMessage>{formik.errors.positionTitle}</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={formik.errors.mainTasks && formik.touched.mainTasks}
            >
              <FormLabel my={1} htmlFor='mainTasks'>
                Main Tasks
              </FormLabel>
              <Input
                id='mainTasks'
                name='mainTasks'
                type='text'
                placeholder='ex. Programming, Data Analysis'
                {...formik.getFieldProps('mainTasks')}
              />
              <FormErrorMessage>{formik.errors.mainTasks}</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={formik.errors.beginDate && formik.touched.beginDate}
            >
              <FormLabel my={1} htmlFor='beginDate'>
                Date of Employment
              </FormLabel>
              <Input
                id='beginDate'
                name='beginDate'
                type='date'
                {...formik.getFieldProps('beginDate')}
              />
              <FormErrorMessage>{formik.errors.beginDate}</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={formik.errors.endDate && formik.touched.endDate}
            >
              <FormLabel my={1} htmlFor='endDate'>
                Due date
              </FormLabel>
              <Input
                id='endDate'
                name='endDate'
                type='date'
                {...formik.getFieldProps('endDate')}
              />
              <FormErrorMessage>{formik.errors.endDate}</FormErrorMessage>
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
    <PracticalInfoView
      companyName={formValues.companyName}
      positionTitle={formValues.positionTitle}
      mainTasks={formValues.mainTasks}
      beginDate={formValues.beginDate}
      endDate={formValues.endDate}
    />
  )
}

export default PracticalExpForm
