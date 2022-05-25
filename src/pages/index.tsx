import React from 'react'
import DarkTheme from '../layouts/Dark'
import Demos from './demos'

const Home: React.FC = () => {
  return (
    <DarkTheme>
      <Demos />
    </DarkTheme>
  )
}
//!called every time  the page refreshed
export async function getStaticProps() {
  const deploymentURL = String(process.env.NEXT_PUBLIC_VERCEL_URL);
  // console.log(process.env.VERCEL_URL);

  // const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
  // const data = await res.json();
  // console.log(data);
  return {
    props: {
      deploymentURL,
    },
  };
}

//!called only during the build of the project
//? make sure the server(localhost:3000)[this will receive the request during build] is running on a terminal during the build
//? also need to change the localhost during the deployment | see the todo
// https://aude53.medium.com/set-environment-variables-with-next-js-and-vercel-e544c0460a48

// export const getStaticProps: GetStaticProps = async (
//    context: GetStaticPropsContext
// ) => {
//    // console.log(context);

//    const res = await fetch('http://localhost:3000/api/services')
//    const { services } = await res.json()
//    console.log({ services })
//    return { props: { services: services } }
// }
export default Home
