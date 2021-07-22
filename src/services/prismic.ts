import Prismic from '@prismicio/client'

export const getPrismicClient = (req?: unknown) => {
    const apiEndpoint  = Prismic.client(
        process.env.PRISMIC_ENDPOINT as string,
        {
            req: req,
            accessToken: process.env.PRISMIC_ACCESS_TOKEN
        }
    )
    return apiEndpoint
}
