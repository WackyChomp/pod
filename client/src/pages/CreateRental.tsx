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


  // fileReader boilerplate
  const handleImageChange = (file: File) => {
    const reader = (readFile: File) => new Promise<string>((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => resolve(fileReader.result as string);
      fileReader.readAsDataURL(readFile);
    });
  
    reader(file).then((result:string) => setRentalImage({ name: file?.name, url: result }));

  };
  
  
  // backend creating record for database
  const onFinishHandler = async (data: FieldValues) => {
    if(!rentalImage.name) return alert('Please add an image');

    await onFinish({ ...data, photo: rentalImage.url, email:user.email })
  }

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