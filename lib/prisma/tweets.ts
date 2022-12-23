import type { Tweet } from '@prisma/client'
import { prisma } from '.'
import { getErrorMessage } from '@/lib/utils/error-message'

export async function likeTweet({ tweetId }: { tweetId: Tweet['id'] }) {
  try {
    const tweet = await prisma.tweet.update({
      where: { id: tweetId },
      data: {
        likes: {
          increment: 1
        }
      }
    })
    return { tweet }
  } catch (error) {
    return { errorMsg: getErrorMessage(error) }
  }
}

export async function unLikeTweet({ tweetId }: { tweetId: Tweet['id'] }) {
  try {
    const tweet = await prisma.tweet.update({
      where: { id: tweetId },
      data: {
        likes: {
          decrement: 1
        }
      }
    })
    return { tweet }
  } catch (error) {
    return { errorMsg: getErrorMessage(error) }
  }
}
