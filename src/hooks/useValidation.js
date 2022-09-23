import { useCallback } from 'react';
import { toast } from 'react-toastify';

export default function useValidation() {

    // simple validation error messages
    const validation = useCallback((schema, values) => {
        let res = schema.validate(values, { abortEarly: false })
        let datas = Object.keys(values)

        if (res.error) {
            for (let data of datas) {
                let inputId = document.getElementById(data)
                let formFeedBackId = document.getElementById(`${data}Error`)

                let errorDetails = res.error.details
                for (let error of errorDetails) {
                    let errors = error.message.replace(/['"]+/g, '')
                    if (error.context.key === data) {
                        inputId.classList.add('is-invalid')
                        inputId.setAttribute('aria-invalid', 'true')
                        formFeedBackId.innerHTML = errors
                    }
                }
            }
            return false
        }
        return true
    }, [])

    // api simple validation error message
    const apiValidation = useCallback((res, user) => {
        let datas = Object.keys(user)
        if (res.response.status === 422) {
            for (let data of datas) {
                let inputId = document.getElementById(data)
                let formFeedBackId = document.getElementById(`${data}Error`)

                let errorDetails = res.response.data
                for (let error of errorDetails) {
                    let errors = error.field.charAt(0).toUpperCase() + error.field.slice(1) + ' ' + error.message.replace(/['"]+/g, '')
                    if (error.field === data) {
                        inputId.classList.add('is-invalid')
                        inputId.setAttribute('aria-invalid', 'true')
                        formFeedBackId.innerHTML = errors
                    }
                }
            }
            return false
        }
        return true
    }, [])

    // toast validation error messages
    const toastValidation = useCallback((schema, values) => {
        let res = schema.validate(values, { abortEarly: false })
        if (res.error) {
            let errorDetails = res.error.details
            for (let error of errorDetails) {
                let errors = error.message.replace(/['"]+/g, '')
                toast.error(errors)
            }
            return false
        }
        return true
    }, [])

    // api toast validation error message
    const apiToastValidation = useCallback((res) => {
        if (res.response.status === 422) {
            let errorDetails = res.response.data
            for (let error of errorDetails) {
                let errors = error.field.charAt(0).toUpperCase() + error.field.slice(1) + ' ' + error.message.replace(/['"]+/g, '')
                toast.error(errors)
            }
            return false
        }
        return true
    }, [])

    // reset all error messages
    const resetErrors = useCallback(() => {
        let inputId = document.querySelectorAll('[aria-invalid="true"]')
        let formFeedBackId = document.getElementsByClassName('invalid-feedback')

        for (let i = 0; i < formFeedBackId.length; i++) {
            formFeedBackId[i].innerHTML = ''
        }
        for (let i = 0; i < inputId.length; i++) {
            inputId[i].setAttribute('aria-invalid', 'false')
            inputId[i].classList.remove('is-invalid')
        }
    }, [])

    return { validation, toastValidation, apiValidation, apiToastValidation, resetErrors }
}