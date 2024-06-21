import { useState, useEffect } from 'react';

const useForm = (initialValues, validate, submit) => {
        const [values, setValues] = useState(initialValues);
        const [errors, setErrors] = useState({});
        const [isSubmitting, setIsSubmitting] = useState(false);

        useEffect(() => {
                    if (Object.keys(errors).length === 0 && isSubmitting) {

                        alert(`
        Form Submitted Successfully!\n\n
        Name: ${values.fullName}\n
        Email: ${values.email}\n
        Number: ${values.phoneNumber}\n
        ${values.applyingForPosition === 'Developer' ? `Experience: ${values.relevantExperience}\n` : ''}
        ${values.applyingForPosition === 'Designer' ? `Portfolio: ${values.portfolioURL}\nExperience: ${values.relevantExperience}\n` : ''}
        ${values.applyingForPosition === 'Manager' ? `Management Experience: ${values.relevantExperience}\n` : ''}
        Skills: ${values.additionalSkills.join(', ')}\n
        Preferred Interview Time: ${values.preferredInterviewTime}\n
        
    `);
            // Call submit function passed from component
            setIsSubmitting(false);
            setValues(initialValues); // Reset form values after submission
        }
    }, [errors, isSubmitting, initialValues, submit]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? handleCheckboxChange(name, value, checked) : value;
        setValues({
            ...values,
            [name]: val,
        });
    };

    const handleCheckboxChange = (name, value, isChecked) => {
        if (isChecked) {
            return [...values[name], value];
        } else {
            return values[name].filter((item) => item !== value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
    };
};

export default useForm;