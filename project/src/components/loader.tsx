import Lottie from 'react-lottie'
import animationData from 'assets/json/circle-loader.json'

interface Props {
  size?: 'small' | 'default' | 'large'
}

const Loader = ({ size = 'default' }: Props) => {
  const width = size === 'small' ? 48 : size === 'large' ? 140 : 64
  const options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  }
  return <Lottie options={options} width={width} isStopped={false} />
}

export default Loader
