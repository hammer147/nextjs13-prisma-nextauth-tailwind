import type { NextApiRequest, NextApiResponse } from 'next'
import { unLikeTweet } from '@/lib/prisma/tweets'
import { getErrorMessage } from '@/lib/utils/error-message'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PATCH') {
    try {
      const { tweetId } = req.query as { tweetId: string } // TODO: check if this is the right way to type this

      const { tweet, errorMsg } = await unLikeTweet({ tweetId })
      if (errorMsg) throw new Error(errorMsg)

      return res.status(200).json({ tweet })
    } catch (error) {
      return res.status(500).json({ error: getErrorMessage(error) })
    }
  }

  res.setHeader('Allow', ['PATCH'])
  res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler
