const validate = (values) => {
    let errors = {};

    if (!values.fullName) {
        errors.fullName = 'Full Name is required';
    }

    if (!values.email) {
        errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if (!values.phoneNumber) {
        errors.phoneNumber = 'Phone Number is required';
    } else if (isNaN(values.phoneNumber)) {
        errors.phoneNumber = 'Phone Number must be a valid number';
    } else if (!/^\d{10}$/.test(values.phoneNumber)) { // Adjust the regex pattern as needed
        errors.phoneNumber = 'Phone Number must be a valid 10-digit number';
    }

    if (!values.applyingForPosition) {
        errors.applyingForPosition = 'Applying for Position is required';
    }

    if ((values.applyingForPosition === 'Developer' || values.applyingForPosition === 'Designer') && !values.relevantExperience) {
        errors.relevantExperience = 'Relevant Experience is required';
    } else if (values.relevantExperience && isNaN(values.relevantExperience)) {
        errors.relevantExperience = 'Relevant Experience must be a number';
    } else if (values.relevantExperience && parseInt(values.relevantExperience) <= 0) {
        errors.relevantExperience = 'Relevant Experience must be greater than zero';
    }

    if (values.applyingForPosition === 'Designer' && !values.portfolioURL) {
        errors.portfolioURL = 'Portfolio URL is required';
    } else if (values.portfolioURL && !isValidUrl(values.portfolioURL)) {
        errors.portfolioURL = 'Portfolio URL is invalid';
    }

    if (values.applyingForPosition === 'Manager' && !values.managementExperience) {
        errors.managementExperience = 'Management Experience is required';
    }

    if (values.additionalSkills.length === 0) {
        errors.additionalSkills = 'At least one Additional Skill must be selected';
    }

    if (!values.preferredInterviewTime) {
        errors.preferredInterviewTime = 'Preferred Interview Time is required';
    }

    return errors;
};

const isValidUrl = (url) => {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
};

export default validate;