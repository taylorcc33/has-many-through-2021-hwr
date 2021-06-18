import React, { useContext, useState } from 'react'
import { Form } from 'semantic-ui-react'
import { useFormInput } from '../customHooks/useFormInput'
import { AuthContext } from '../providers/AuthProvider'
import { useHistory } from 'react-router-dom'

const UpdateUserForm = (props) => {
    const history = useHistory()
    const { user, handleUpdate } = useContext(AuthContext)
    const email = useFormInput(user.email, 'Email')
    const userName = useFormInput(user.user_name, 'Username')
    const name = useFormInput(user.name, 'Name')

    const handleSubmit = (e) => {
        e.preventDefault()

        handleUpdate({
            email: email.value,
            user_name: userName.value,
            name: name.value
        }, history)

    }
    return (
        <>
            <h1>Register form</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Input {...email} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                <Form.Input {...userName} />
                <Form.Input {...name} />
                <Form.Button type='submit'>add</Form.Button>
            </Form>
        </>
    )
}

export default UpdateUserForm