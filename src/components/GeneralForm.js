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
import GeneralInfoView from './GeneralInfoView'

const GeneralForm = () => {
  const initialValues = { name: '', number: '', email: '' }

  const [formValues, setFormValues] = useState(initialValues)
  const [showForm, setShowForm] = useState(true)

  return showForm ? (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        number: Yup.string()
          .max(10, 'Must be 10 characters or less')
          .required('Required'),
        name: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
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
              isInvalid={formik.errors.name && formik.touched.name}
            >
              <FormLabel my={1} htmlFor='name'>
                Name
              </FormLabel>
              <Input
                id='name'
                name='name'
                type='text'
                placeholder='Full Name'
                {...formik.getFieldProps('name')}
              />
              <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={formik.errors.email && formik.touched.email}
            >
              <FormLabel my={1} htmlFor='email'>
                Email Address
              </FormLabel>
              <Input
                id='email'
                name='email'
                type='email'
                placeholder='example@test.com'
                {...formik.getFieldProps('email')}
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={formik.errors.number && formik.touched.number}
            >
              <FormLabel my={1} htmlFor='number'>
                Number
              </FormLabel>
              <Input
                id='number'
                name='number'
                type='text'
                placeholder='022314567'
                {...formik.getFieldProps('number')}
              />
              <FormErrorMessage>{formik.errors.number}</FormErrorMessage>
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
    <GeneralInfoView
      name={formValues.name}
      email={formValues.email}
      number={formValues.number}
    />
  )
}

export default GeneralForm
