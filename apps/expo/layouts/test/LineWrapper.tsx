import { View } from 'react-native'
import { ReactNode } from 'react'
import metrics from '../../styles/metrics'

const LineWrapper = ( props: IProps ) => {

  const { children } = props

  return(
    <View style={{
        width: metrics.screenWidth,
        minHeight: 50,
        //borderWidth: 0.5,
        backgroundColor: '#ffffff',
        marginVertical: 9,
        paddingHorizontal: 6,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {children}
    </View>
  )
}


export default LineWrapper

interface IProps {
  children: ReactNode
}
