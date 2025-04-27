import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

export function useGetAccessToken() {
  return useSelector((state: RootState) => state.accessToken)
  
}
