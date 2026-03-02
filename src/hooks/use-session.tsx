import * as React from 'react'

import {
  deleteAccessToken,
  deleteSessionToken,
  getAccessToken,
  getSessionToken,
  setAccessToken,
  setSessionToken,
} from '@/lib/secure-store'

// source api: https://github.com/tiesen243/yuki-ui/tree/main/examples/auth-next/server/auth

interface SessionContextValue {
  user: {
    id: string
    name: string
    email: string
  } | null
  isLoading: boolean

  signIn: (opts: { email: string; password: string }) => Promise<void>
  signOut: () => void
  refreshToken: () => Promise<void>
}

const SessionContext = React.createContext<SessionContextValue | null>(null)

const useSession = () => {
  const context = React.use(SessionContext)
  if (!context)
    throw new Error('useSession must be used within a SessionProvider')
  return context
}

function SessionProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [user, setUser] = React.useState<SessionContextValue['user'] | null>(
    null
  )
  const [isLoading, startTransition] = React.useTransition()

  const refresh = React.useCallback(
    () =>
      startTransition(async () => {
        const res = await fetch(
          'http://192.168.1.10:3000/api/auth/current-user',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${getAccessToken()}`,
            },
          }
        )
        if (!res.ok) return setUser(null)
        return setUser(await res.json())
      }),
    []
  )

  const signIn = React.useCallback(
    async (opts: { email: string; password: string }) => {
      const res = await fetch('http://192.168.1.10:3000/api/auth/sign-in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(opts),
      })

      if (!res.ok) throw new Error('Invalid credentials')
      const tokens = (await res.json()) as {
        accessToken: string
        refreshToken: string
      }
      await setAccessToken(tokens.accessToken)
      await setSessionToken(tokens.refreshToken)
      refresh()
    },
    [refresh]
  )

  const signOut = React.useCallback(async () => {
    await fetch('http://192.168.1.10:3000/api/auth/sign-out', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getSessionToken()}`,
      },
    })
    await deleteAccessToken()
    await deleteSessionToken()
    setUser(null)
  }, [])

  const refreshToken = React.useCallback(async () => {
    const res = await fetch('http://192.168.1.10:3000/api/auth/refresh-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getSessionToken()}`,
      },
    })
    if (!res.ok) return signOut()
    const { accessToken } = (await res.json()) as { accessToken: string }
    await setAccessToken(accessToken)
    refresh()
  }, [refresh, signOut])

  React.useEffect(() => refresh(), [refresh])

  const value = React.useMemo(
    () => ({ user, isLoading, signIn, signOut, refreshToken }),
    [user, isLoading, signIn, signOut, refreshToken]
  )

  return <SessionContext value={value}>{children}</SessionContext>
}

export { SessionProvider, useSession }
