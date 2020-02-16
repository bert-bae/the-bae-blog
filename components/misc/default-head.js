import Head from 'next/head'

const DefaultHead = (props) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      { props.children }
    </Head>
  )
}

export default DefaultHead