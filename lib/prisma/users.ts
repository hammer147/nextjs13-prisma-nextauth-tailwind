import type { User } from '@prisma/client'
import { prisma } from '.'
import { getErrorMessage } from '@/lib/utils/error-message'

export async function getUsers() {
  try {
    const users = await prisma.user.findMany()
    return { users }
  } catch (error) {
    return { errorMsg: getErrorMessage(error) }
  }
}

export async function createUser(user: User) {
  try {
    const userFromDB = await prisma.user.create({ data: user })
    return { user: userFromDB }
  } catch (error) {
    return { errorMsg: getErrorMessage(error) }
  }
}

export async function getUserById(id: User['id']) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      // include: { tweets: true }
    })
    return { user }
  } catch (error) {
    return { errorMsg: getErrorMessage(error) }
  }
}
