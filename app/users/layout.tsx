import { getUsers } from '@/lib/prisma/users'
import { ReactNode } from 'react'
import Users from './users'

export const revalidate = 0

async function getData() {
  const { users } = await getUsers()
  if (!users) {
    throw new Error('Failed to fetch data')
  }

  return users
}

const UsersLayout = async ({ children }: { children: ReactNode }) => {
  const users = await getData()

  return (
    <section className='flex'>
      <aside className='w-1/4'>
        {/* @ts-expect-error Server Component */}
        <Users users={users} />
      </aside>
      <main>{children}</main>
    </section>
  )
}

export default UsersLayout
