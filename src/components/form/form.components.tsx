import React, {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useRef,
} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'yup-phone';
import { gsap } from 'gsap';

import { ReactComponent as Arrow } from 'src/images/shevron.svg';

//Interfaces
import { IForm, IFormData } from './form.interfaces';

//Styles
import {
  ContainerStyles,
  FormStyles,
  Header,
  ButtonStyles,
  FormContainer,
} from './form.styles';

//Yup Schema
const requests = ['Partnership', 'Service Request', 'Career', 'Other'];

const schema = yup
  .object({
    name: yup.string().typeError('Name Type Error.').required('Name error!'),
    email: yup
      .string()
      .email()
      .typeError('Email Error.')
      .required('Email Error!'),
    phone: yup
      .string()
      .phone('US', true, 'Not Valid Phone!') //${path}
      .required('Неправильно заполнен номер!'),
    commentary: yup.string(),
    typeRequest: yup
      .string()
      // .required('Please select a product')
      .oneOf(requests),
    // attachments: yu
  })
  .required();

const FormComponent = ({ formRef, closeHandler }: IForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  //Select - Option
  const [open, setOpen] = useState<boolean>(false);
  const [selectValue, setSelectValue] = useState<string>('');

  const selRef = useRef(null);

  const dropDownRef = useRef(null);
  const optionsRef = gsap.utils.selector(dropDownRef);

  const options = requests;

  const openCloseSelect = (open: boolean) => {
    if (open) {
      gsap.to(dropDownRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.3,
      });
      gsap.to(selRef.current, {
        border: '1px solid #5a5a5a',
      });
      gsap.fromTo(
        optionsRef('.option'),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.2,
          stagger: 0.1,
        }
      );
    }

    if (!open) {
      gsap
        .timeline()
        .to(dropDownRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
        })
        .to(selRef.current, {
          border: '1px solid #dddfe1',
        });
      gsap.to(optionsRef('.option'), {
        opacity: 0,
        duration: 0.15,
      });
    }
  };

  let inpFile: any = null;

  const onChangeFile = async (e: any) => {
    const file = e.currentTarget.files;
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1080,
    };
  };

  const onSubmit = (data: IFormData) => {
    alert(data);
  };
  return (
    <FormStyles ref={formRef}>
      <FormContainer className='container'>
        <ButtonStyles
          className='close-button'
          onClick={() => {
            closeHandler();
          }}
          type='button'
        >
          <span>Go Back</span>
        </ButtonStyles>
        <Header className='header'>
          <span>Let’s build</span>
          <br />
          <span>future together</span>
        </Header>
        <ContainerStyles className='form-container'>
          <span>
            EZ Blockchain believes that modern technologies and hard teamwork
            can significantly benefit energy businesses and reduce CO2
            emissions. Let's talk about how we can do it together.
          </span>
          <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <h4>Get in touch with us</h4>

            <input
              className='w-100'
              placeholder='Full name'
              {...register('name')}
              type='text'
            />
            <div className='flex-input'>
              <input
                className='f-1'
                {...register('companyName')}
                placeholder='Company name'
                type='text'
              />
              <input
                className='f-1'
                {...register('phone')}
                placeholder='Phone number'
                type='tel'
              />
            </div>
            <input
              className='w-100'
              placeholder='Email'
              {...register('email')}
              type='email'
            />
            <div className='label-input'>
              <span>Type of request</span>
              <div className='input-select'>
                <div
                  className={`select-value`}
                  onClick={() => {
                    setOpen(!open);
                    openCloseSelect(open);
                  }}
                  ref={selRef}
                >
                  <input
                    style={{
                      visibility: 'hidden',
                      display: 'none',
                      opacity: 0,
                      height: 0,
                    }}
                    placeholder='Choose type of request'
                    {...register('typeRequest')}
                    type='text'
                  />
                  <div className='picked'>
                    {selectValue === ''
                      ? `Choose type of request`
                      : selectValue}
                    <Arrow className={`input-arrow ${open ? 'active' : ''}`} />
                  </div>

                  <div className='dropdown' ref={dropDownRef}>
                    {options.map((option) => (
                      <div
                        className='option'
                        onClick={() => {
                          setSelectValue(option);
                          setOpen(false);
                        }}
                        key={option}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <textarea
              className='w-100'
              rows={5}
              placeholder='Short description of the project'
              name='comment'
            />
            <div className='label-input'>
              <span>Attachments</span>
              <div
                className='attachment'
                style={{ cursor: 'pointer', width: '100%' }}
                onClick={() => {
                  inpFile.click();
                }}
              >
                <span>Browse Files</span>
                or drag & drop files here
              </div>
            </div>
            <input
              onChange={onChangeFile}
              style={{ display: 'none' }}
              type='file'
              id='fileimg'
              ref={(inp) => (inpFile = inp)}
              accept='image/x-png,image/gif,image/jpeg'
            ></input>
            <button type='submit'>Send</button>
          </form>
        </ContainerStyles>
      </FormContainer>
    </FormStyles>
  );
};

export default FormComponent;
