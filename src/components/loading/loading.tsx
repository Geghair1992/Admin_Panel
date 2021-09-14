import styled,{keyframes} from 'styled-components'

const LoadingAnimation = keyframes`
  0%{
    width: 100px;
    height: 100px;
  }
  100%{
    width: 150px;
    height: 150px;
  }
`

const Loading = styled.div`
  width:100px;
  height: 100px;
  background-color: #000;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  animation: ${LoadingAnimation} 0.3s ease infinite alternate;
`

export default Loading;