import axios from 'axios';
import { useMutation, QueryClient } from '@tanstack/react-query';
import { Info } from '../Utils/validationSchemas';
import { useNavigate } from 'react-router-dom';

const queryClient = new QueryClient();

export const SignUp = () => {
  const navigate = useNavigate();
  const addUser = useMutation({
    mutationFn: async (info: Info) => {
      try {
        const response = await axios.post<Info>(
          'https://mainsite-yqoe.onrender.com/api/auth/register',
          info
        );
        return response.data;
      } catch (err) {
        throw new Error('Check your data');
      }
    },
    onMutate: (newUser: Info) => {
      queryClient.setQueryData<Info[]>(['info'], (info) => [
        newUser,
        ...(info || []),
      ]);
    },
    onSuccess() {
      console.log('Success data');
    },
  });
  const handleRegistration = async (data: any) => {
    console.log('The data from the form is >>>', data);
    try {
      await addUser.mutateAsync(data);
      console.log('The data is given as:', data);
      navigate('/login');
    } catch (error) {
      console.log('The message is given as:');
    }
  };

  return {
    handleRegistration,
  };
};
