import React, { useState } from 'react';
import useForm from './useForm';
import validate from './validate';
import styled from 'styled-components';
import './file.css';
const Container = styled.div`
    display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const FormContainer = styled.form`
    width: 100%;
    max-width: 800px;
    padding: 20px;
    border-radius: 8px;
    border-radius: 10px;
    
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    justify-content: space-between;
    position: relative;
    marginbotton
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    background-color: transparent;
`;

const FormGroup = styled.div`
    margin-bottom: 20px;
    justify-items : start;
`;

const Label = styled.label`
    font-weight: bold;
    color: #9CA3AF;
    font-size: 18px;
    
`;

const Input = styled.input`
   flex: 1;
  background-color: transparent;
  border: 1px solid rgb(0, 170, 255);
  outline: none;
  font-size: 18px;
  color: #9CA3AF;
  border-radius: 12px;
  padding: 12px 16px;
  width: 100%;
  &:focus {
    border: 1px solid linear-gradient(225deg, rgb(0, 42, 255) 0%, rgb(0, 170, 255) 100%);
  }

`;

const Select = styled.select`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background :transparent;
    color: #9CA3AF;
    border: 1px solid rgb(0, 170, 255);
    outline : rgb(0, 170, 255);
`;

const TextArea = styled.textarea`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
     background-color: transparent;
     border: 1px solid rgb(0, 170, 255);
     outline : rgb(0, 170, 255);
`;

const CheckboxGroup = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 5px;
    color: #9CA3AF;
    bg-transpraint;
`;

const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    color: #9CA3AF;
`;

const CheckboxInput = styled.input`
    margin-right: 5px;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

const JobApplicationForm = () => {
    const [showRelevantExperience, setShowRelevantExperience] = useState(false);
    const [showPortfolioURL, setShowPortfolioURL] = useState(false);
    const [showManagementExperience, setShowManagementExperience] = useState(false);

    const initialState = {
        fullName: '',
        email: '',
        phoneNumber: '',
        applyingForPosition: '',
        relevantExperience: '',
        portfolioURL: '',
        managementExperience: '',
        additionalSkills: [],
        preferredInterviewTime: '',
    };

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(initialState, validate, submit);

    function submit() {
        alert(JSON.stringify(values, null, 2));
        // Perform submission actions here
    }

    return (
        <Container className='bg-slate-900  '>
            <h1 className='text-3xl mx-2 text-center font-semibold text-white mt-20 mb-10'> Intermediate Dynamic Form with Nested Conditional Logic and Multiple
Field Types</h1>
            <FormContainer onSubmit={handleSubmit} className='box mb-10 '>
                <FormGroup>
                    <Input
                        placeholder='fullName'
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={values.fullName}
                        onChange={handleChange}
                    />
                    {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
                </FormGroup>

                <FormGroup>
                    
                    <Input
                        placeholder='email'
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="text-red-500 bg-transparent">{errors.email}</p>}
                </FormGroup>

                <FormGroup>
                  
                    <Input
                        placeholder='phoneNumber'
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={values.phoneNumber}
                        onChange={handleChange}
                    />
                    {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="applyingForPosition">Applying for Position</Label>
                    <Select
                        id="applyingForPosition"
                        name="applyingForPosition"
                        value={values.applyingForPosition}
                        onChange={handleChange}
                    >
                        <option value="">Select Position</option>
                        <option value="Developer">Developer</option>
                        <option value="Designer">Designer</option>
                        <option value="Manager">Manager</option>
                    </Select>
                    {errors.applyingForPosition && <p className="text-red-500">{errors.applyingForPosition}</p>}
                </FormGroup>

                {values.applyingForPosition === 'Developer' || values.applyingForPosition === 'Designer' ? (
                    <FormGroup>
                        <Label htmlFor="relevantExperience">Relevant Experience (Years)</Label>
                        <Input
                            type="number"
                            id="relevantExperience"
                            name="relevantExperience"
                            value={values.relevantExperience}
                            onChange={handleChange}
                        />
                        {errors.relevantExperience && <p className="text-red-500">{errors.relevantExperience}</p>}
                    </FormGroup>
                ) : null}

                {values.applyingForPosition === 'Designer' ? (
                    <FormGroup>
                        <Label htmlFor="portfolioURL">Portfolio URL</Label>
                        <Input
                            type="text"
                            id="portfolioURL"
                            name="portfolioURL"
                            value={values.portfolioURL}
                            onChange={handleChange}
                        />
                        {errors.portfolioURL && <p className="text-red-500">{errors.portfolioURL}</p>}
                    </FormGroup>
                ) : null}

                {values.applyingForPosition === 'Manager' ? (
                    <FormGroup>
                        <Label htmlFor="managementExperience">Management Experience</Label>
                        <TextArea
                            id="managementExperience"
                            name="managementExperience"
                            value={values.managementExperience}
                            onChange={handleChange}
                        />
                        {errors.managementExperience && <p className="text-red-500">{errors.managementExperience}</p>}
                    </FormGroup>
                ) : null}

                <FormGroup>
                    <Label>Additional Skills</Label>
                    <CheckboxGroup>
                        <CheckboxLabel>
                            <CheckboxInput
                                type="checkbox"
                                name="additionalSkills"
                                value="JavaScript"
                                onChange={handleChange}
                                checked={values.additionalSkills.includes('JavaScript')}
                            />
                            JavaScript
                        </CheckboxLabel>
                        <CheckboxLabel>
                            <CheckboxInput
                                type="checkbox"
                                name="additionalSkills"
                                value="CSS"
                                onChange={handleChange}
                                checked={values.additionalSkills.includes('CSS')}
                            />
                            CSS
                        </CheckboxLabel>
                        <CheckboxLabel>
                            <CheckboxInput
                                type="checkbox"
                                name="additionalSkills"
                                value="Python"
                                onChange={handleChange}
                                checked={values.additionalSkills.includes('Python')}
                            />
                            Python
                        </CheckboxLabel>
                        {/* Add more skills checkboxes as needed */}
                    </CheckboxGroup>
                    {errors.additionalSkills && <p className="text-red-500">{errors.additionalSkills}</p>}
                </FormGroup>

              <FormGroup>
  <Label htmlFor="preferredInterviewTime">Preferred Interview Time</Label>
  <Input
    type="datetime-local"
    id="preferredInterviewTime"
    name="preferredInterviewTime"
    value={values.preferredInterviewTime}
    onChange={handleChange}
    onFocus={(e) => {
      e.target.blur();
      e.target.focus();
    }}
  />
  {errors.preferredInterviewTime && <p className="text-red-500">{errors.preferredInterviewTime}</p>}
</FormGroup>
                 <div className='justify-center'>
                    <Button className='gradient w-60 font-semibold mb-10 text-xl' type="submit">Submit</Button>
                    </div>
            </FormContainer>
        </Container>
    );
};

export default JobApplicationForm;
