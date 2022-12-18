import type { NextApiRequest, NextApiResponse } from 'next'
import { createUser, getUsers } from '@/lib/prisma/users'
import { getErrorMessage } from '@/lib/utils/error-message'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const { users, errorMsg } = await getUsers()
      if (errorMsg) throw new Error(errorMsg)
      return res.status(200).json({ users })
    } catch (error) {
      return res.status(500).json({ error: getErrorMessage(error) })
    }
  }

  if (req.method === 'POST') {
    try {
      const data = req.body
      const { user, errorMsg } = await createUser(data)
      if (errorMsg) throw new Error(errorMsg)
      return res.status(200).json({ user })
    } catch (error) {
      return res.status(500).json({ error: getErrorMessage(error) })
    }
  }

  res.setHeader('Allow', ['GET', 'POST'])
  res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler
