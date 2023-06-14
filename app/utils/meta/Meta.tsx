import { FC } from 'react'

import Head from 'next/head'
import { ISeo } from './meta.interface'
import { useRouter } from 'next/router'

const Meta: FC<ISeo> = ({title, description, image, children}) => {

    const {asPath} = useRouter()
    const currentUrl = `${process.env.APP_URL}${asPath}`

  return (
    <>
    <Head>
        <title itemProp='headline'>{title}</title>
        {description ? (

        ): (<meta name='robots' content='noindex, nofollow' />)}
    </Head>
    </>
  )
}

export default Meta