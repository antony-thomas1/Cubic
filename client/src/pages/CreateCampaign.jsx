import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { money } from '../assets';
import { CustomButton, FormField, Loader } from '../components';
import { checkIfImage } from '../utils';
import { useStateContext } from '../context';

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading ] = useState(false);
  const { createCampaign } = useStateContext();
  const [form, setForm ] = useState({
    name: '',
    title: '',
    description: '',
    category: '',
    target: '',
    deadline: '',
    image: ''
  });
  
  // Takes the keypress event and calls setForm function
  // fuction updates every field accordingly
  const handleFormFieldChange = (fieldName, e) => {
    setForm({...form, [fieldName]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    checkIfImage(form.image, async (exists) =>{
      if(exists){
        setIsLoading(true);
        await createCampaign({...form, target: ethers.utils.parseUnits(form.target, 18)})
        setIsLoading(false);
        navigate('/home');
      }
      else{
        alert('Provide a vaild image URL')
        setForm({...form, image: ''})
      }
    })
    
  }

  return (
    // Create Campaign Form Field
    <div className='bg-[#0A2647] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>
      {isLoading && <Loader/>}

      <div className='flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#6942eb] rounded-[10px]'>
        <h1 className='font-epilogue font-bold text-white sm:text-[25px] text-[18px] leading-[38px]'>
          Start a Campaign
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
        {/* Parallel fields for Name and Title */}
        <div className='flex flex-wrap gap-[40px]'>
          <FormField
            labelName = "Your Name *"
            placeholder = "John Doe"
            inputType = "text"
            value = {form.name}
            handleChange = {(e) => handleFormFieldChange("name", e)}
          />

          <FormField
            labelName = "Campaign Title *"
            placeholder = "Give a title"
            inputType = "text"
            value = {form.title}
            handleChange = {(e) => handleFormFieldChange('title', e)}
          />
        </div>

        <FormField
            labelName = "Story *"
            placeholder = "Write your story"
            isTextArea
            value = {form.description}
            handleChange = {(e) => handleFormFieldChange('description', e)}
          />

          {/* Category */}
          <FormField
            labelName = "Category *"
            placeholder = "Mention the category"
            inputType = "text"
            value = {form.category}
            handleChange = {(e) => handleFormFieldChange('category', e)}
          />

          {/* Banner */}
          <div className='flex w-full justify-start items-center p-4 bg-[#6942eb] h-[120px] rounded-[10px]'>
            <img src={money} alt="money" className='w-[40px] h-[40px] object-contain'/>
            <h4 className='font-epilogue font-bold text-white text-[25px] ml-[20px]'>
              You will get 100% of the raised amount
            </h4>
          </div>

          {/* Parallel fields */}
        <div className='flex flex-wrap gap-[40px]'>
          <FormField
            labelName = "Goal *"
            placeholder = "ETH 0.50"
            inputType = "text"
            value = {form.target}
            handleChange = {(e) => handleFormFieldChange("target", e)}
          />

          <FormField
            labelName = "End Date *"
            placeholder = "End Date"
            inputType = "date"
            value = {form.deadline}
            handleChange = {(e) => handleFormFieldChange('deadline', e)}
          />

        </div>

        <FormField
            labelName = "Campaign image *"
            placeholder = "Place image URL of your campaign"
            inputType = "url"
            value = {form.image}
            handleChange = {(e) => handleFormFieldChange('image', e)}
          />

        <div className='justify-center items-center mt-[40px] flex'>
          <CustomButton 
              btnType="submit"
              title="Submit new Campaign"
              styles="bg-[#00c570]"
            />
          </div>
      </form>

    </div>
  )
}

export default CreateCampaign