/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import axios, { endpoints } from '@/utils/axios';

export const createUserApi = async (formData: any) => {
  try {
    const response = await axios.post(endpoints.auth.register, formData);
    return response;
  } catch (error) {
    toast.error(`Erreur`);
    throw error;
  }
};

export const useCreateUserApi = () =>
  useMutation({
    mutationFn: createUserApi,
    onError: () => {
      toast.error(`Erreur !`);
    },
  });
