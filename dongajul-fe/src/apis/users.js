import { $get, $post, $put, $delete } from '../libs/axios';
import { useQuery, useMutation, useQueryClient } from 'react-query';

const ENDPOINT = '/users';

export const fetchUsers = async () => {
  const { data } = await $get(ENDPOINT);
  console.log('data:', data);
  return data;
};
