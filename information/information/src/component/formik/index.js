import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import { TextField, InputLabel, Select, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        //   margin: theme.spacing(1), 
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const MyCheckbox = ({ children, ...props }) => {

    const [field, meta] = useField({ ...props, type: 'checkbox' });
    console.log(meta.error)
    console.log(children)
    return (
        <div>
            <label className="checkbox-input">
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {
                meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : null

            }
        </div>
    );
};

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

const SignupForm = () => {
    const classes = useStyles();

    const [state, setState] = useState({
        age: '',
        name: 'hai',
    });
    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };
    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', email: '', sex: "", favourite: false }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                lastName: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
                favourite: Yup.boolean()
                    .required('Required')
                    .oneOf([true], 'You must accept the terms and conditions.'),
                sex: Yup.string()
                    .oneOf(
                        ['Nam', 'Nu'],
                        'Invalid Job Type'
                    )
                    .required('Required'),
            })}

            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    console.log(values)
                    setSubmitting(false);
                }, 400);
            }}
        >

            {
                ({ errors, handleBlur, values, setFieldValue }) => {
                    return (
                        <Form>

                            <TextField
                                name="firstName"
                                label="firstName"
                                type="text"
                                error={errors.firstName}
                                helperText={errors.firstName}
                                // value={values.firstName}
                                inputProps={{
                                    onBlur: handleBlur
                                }}
                                onChange={(e) => {
                                    values.firstName = e.target.value
                                }}
                            />
                            {/* 
                            <button onClick={()=> setFieldValue("firstName", "khoa")}>khoa</button>
                            <button onClick={()=> setFieldValue("firstName", "khanh")}>khanh</button>
                            <button onClick={()=> setFieldValue("firstName", "lan")}>lan</button> */}

                            <TextField
                                name="lastName"
                                label="lastName"
                                type="text"
                                error={errors.lastName}
                                helperText={errors.lastName}
                                // value={values.firstName}
                                inputProps={{
                                    onBlur: handleBlur
                                }}
                                onChange={(e) => {
                                    values.lastName = e.target.value
                                }}
                            />

                            <TextField
                                name="email"
                                label="Email Address"
                                type="email"
                                error={errors.email}
                                helperText={errors.email}
                                // value={values.firstName}
                                inputProps={{
                                    onBlur: handleBlur
                                }}
                                onChange={(e) => {
                                    values.email = e.target.value
                                }}
                            />

                            {/* <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text" />
                            <ErrorMessage name="lastName" /> */}

                            {/* <label htmlFor="email">Email Address</label>
                            <Field name="email" type="email" />
                            <ErrorMessage name="email" /> */}


                                <MySelect
                                    label="Sex"
                                    name="sex"
                                >
                                    <option aria-label="None" value="" />
                                    <option value="Nam">Nam</option>
                                    <option value="Nu">Nu</option>
                                </MySelect>

                            <MyCheckbox name="acceptedTerms">
                                I accept the terms and conditions
                            </MyCheckbox>

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            }

        </Formik>
    );
};

export default SignupForm