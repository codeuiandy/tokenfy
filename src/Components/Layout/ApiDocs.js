import React, {useEffect} from 'react'
import Loader from '../../Loader'
import { useRecoilState } from 'recoil'
import { loader } from '../../../globalState/localData'
import { Layout } from './Layout'
export default function ApiDocs() {
  const [isLoading, setIsLoading] = useRecoilState(loader)
  useEffect(() => {
    setIsLoading(false)
  }, [])

  if(isLoading){
    return (
      <div style={{height: '625px'}}>
        <Loader />
      </div>
    )
  } else {
    return (
      <div>
        <Layout>
          <section id="ApiHeader" style={{height:"44444px"}}>
            <h1>REST APIs</h1>
            <h3>Get Started</h3>
            <p>Before you can integrate a PayPal product or solution, you must set up your development environment to get OAuth 2.0 client ID and secret credentials for the sandbox and live environments. You exchange these credentials for an access token that authorizes your REST API calls. To test your web and mobile apps, you create sandbox accounts.</p>

            <p>Logging into the Developer Dashboard to get credentials and create sandbox accounts requires a developer, personal, or business account. Each account provides different levels of access to PayPal functionality.</p>
          </section>
        </Layout>
    
      </div>
    )
  }
}
