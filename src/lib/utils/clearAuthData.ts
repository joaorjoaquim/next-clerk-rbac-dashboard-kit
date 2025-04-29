'use client'

import { logout } from '@/core/reducers/authSlice'
import { AppDispatch } from '@/core/store'
import Cookies from 'js-cookie'

export function clearAuthData(dispatch: AppDispatch) {
  Cookies.remove('authData')
  dispatch(logout())
}
