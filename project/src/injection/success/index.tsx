import { Button } from 'antd'
import { SuccessImg } from 'assets/images'
import { URL } from 'config/constants'
import { useHistory } from 'react-router-dom'

const InjectionSuccess = () => {
  const history = useHistory()
  const backToHome = () => {
    history.replace(URL.HOME)
  }
  return (
    <div style={{ padding: '80px 480px' }} className="flex flex-col justify-center items-center">
      <img style={{ width: 480 }} className="h-auto" src={SuccessImg} alt="" />
      <h2 className="pt-5 pb-1 font-bold text-lg">Point Injection successfully submitted</h2>
      <p>Request is waiting for manager’s approval</p>
      <div className="my-8">
        <Button className="btn primary" onClick={backToHome}>
          Back to Home
        </Button>
      </div>
    </div>
  )
}

export default InjectionSuccess
