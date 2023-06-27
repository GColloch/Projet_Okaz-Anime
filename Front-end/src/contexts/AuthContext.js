import React, { useEffect } from 'react'
import { toast } from 'react-toastify'

const AuthContext = React.createContext()

const actionTypes = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOADING: 'LOADING',
  LOGOUT: 'LOGOUT',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAILURE: 'REGISTER_FAILURE'
}

const initialState = {
  isAuthenticated: false,
}

const AuthReducer = (state, action) => {


  switch (action.type) {

    case actionTypes.LOGIN_SUCCESS:
      return {
        isAuthenticated: true
      }

    default:
      throw new Error(`Unhandled action type : ${action.type}`)



  }



}

const AuthContextFactory = (dispatch) => ({

  login: async () => {
    try {

      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
      })

      toast.success(`Bienvenue 🔥`)

    } catch (error) {

      toast.error('Identifiant ou mot de passe invalid 🥺')

    }
  },

})

const AuthProvider = ({ children }) => {
  const savedState = window.localStorage.getItem('authContext')
  const _initialState = savedState ? JSON.parse(savedState) : initialState
  const [state, dispatch] = React.useReducer(AuthReducer, _initialState)


  useEffect(() => {
    window.localStorage.setItem('authContext', JSON.stringify(state))
  }, [state])

  return (
    <AuthContext.Provider value={{ state, ...AuthContextFactory(dispatch) }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (!context) throw new Error('Context doesnt exists')

  return context
}

export {
  AuthProvider,
  useAuth
}
