import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Product } from '../types/fakeApiTypes'

export const useFetchItemsQuery = () => {
  const fetchAllItems = async (): Promise<Product[]> => {
    const url = `/api/products`
    const response = await axios.get(url)

    return response.data
  }

  return useQuery(['fetchItems'], fetchAllItems, {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  })
}
