import { Field, Form, Formik } from 'formik';
import {
    Button,
    FormControl,
    FormErrorMessage,
    Input
}from '@chakra-ui/react';
import FormInput from './FormInput';

const formStyle: object = {
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '31px'
}
interface IvalidateEmail{
    email: string;
}
const validateEmail = (value:IvalidateEmail) => {
    let error;
    console.log(value);
    if (!value) {
        error = 'Email is required';
    }
    return error;
}

interface IvalidatePassword{
    password: string;
}
const validatePassword = ({password}:IvalidatePassword) => {
    let error;
    console.log(password);
    if (!password) {
        error = 'Password is required';
    }else if(password.length < 6){
        error = 'Password must be at least 6 characters';
    }
    return error;
}

interface IFieldProps{
    field: any;
    form: any;
}
const LoginForm = () => {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, actions) => {
                alert(values);
            }}
        >
            {(props) => (
                <Form style={formStyle}>
                    <Field name='email' validate={validateEmail} type='email' >
                        {({ field, form }: IFieldProps) => (
                            <FormControl isInvalid={form.errors.email && form.touched.email} 
                                display='flex' 
                                flexDirection='column' 
                                alignItems='center' 
                                p='0' 
                            >
                                <FormInput {...field} placeholder='Email Address / Username'/>
                                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Field name='password' validate={validatePassword} type='password' >
                        {({ field, form }: IFieldProps) => (
                            <FormControl isInvalid={form.errors.password && form.touched.password}
                                display='flex' 
                                flexDirection='column' 
                                alignItems='center' 
                                p='0' 
                            >
                                <FormInput {...field} placeholder='Password'/>
                                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Button
                        w='359px' 
                        h='50px' 
                        backgroundColor='lightBlue.600'
                        isLoading={props.isSubmitting}
                        type='submit'
                        color='gray.50'
                    >
                    Log in
                    </Button>
                </Form>
            )}
        </Formik>
    )
}

export default LoginForm;
