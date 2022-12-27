import { useUser } from '@auth0/nextjs-auth0/client'
import { Button } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'
import { goToPage } from '../helpers/routeFunction'

/**
 * @returns Login or Logout button depending on user state
 */
export const LoginLogoutButton = ({
  setDisplay,
}: {
  setDisplay: Dispatch<SetStateAction<string>>
}) => {
  const { user } = useUser()
  return (
    <>
      {user ? (
        <Button
          rounded='xl'
          textShadow='2.5px 2.5px orange'
          colorScheme='black'
          outlineColor='darkorange'
          size={'lg'}
          minWidth='60vw'
          onClick={() => goToPage(setDisplay, 'api/auth/logout')}
        >
          Logout
        </Button>
      ) : (
        <Button
          rounded='xl'
          textShadow='2.5px 2.5px orange'
          colorScheme='black'
          outlineColor='darkorange'
          size={'lg'}
          minWidth='60vw'
          onClick={() => goToPage(setDisplay, 'api/auth/login')}
        >
          Login
        </Button>
      )}
    </>
  )
}
