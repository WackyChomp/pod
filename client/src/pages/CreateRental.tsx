import { useState} from 'react';
import { useGetIdentity } from '@pankod/refine-core';
import { FieldValues, useForm } from '@pankod/refine-react-hook-form';
import { useNavigate } from '@pankod/refine-react-router-v6';

import Form from 'components/common/Form';

const CreateRental = () => {
  const navigate = useNavigate();
  const { data: user } = useGetIdentity();
  const [rentalImage, setRentalImage] = useState({ name:'', url:'' })
  const { refineCore: { onFinish, formLoading }, register, handleSubmit } = useForm();

  const handleImageChange = () => {}

  const onFinishHandler = () => {}

  return (
    <Form       // Referenced from Form.tsx -> interface common.d.ts
      type='Create'
      register={register}
      onFinish={onFinish}
      formLoading={formLoading}
      handleSubmit={handleSubmit}
      handleImageChange={handleImageChange}
      onFinishHandler={onFinishHandler}
      rentalImage={rentalImage}
    />
  )
}

export default CreateRental