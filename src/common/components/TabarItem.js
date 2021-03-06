import React, { memo } from 'react'
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/AntDesign'
import commonStyles from '../../styles/common'

const TABS = ['Home', 'HotList', 'News', 'NewsList', 'Top', 'TopList', 'Category', 'Categories', 'Option', 'OptionList']
export default memo(({ focused, navigation, previousPage }) => {
  const { routeName } = navigation.state
  let source
  const render = []
  if (routeName === 'Home') {
    source = 'home'
  } else if (routeName === 'News') {
    source = 'rocket1'
  } else if (routeName === 'Top') {
    source = 'hearto'
  } else if (routeName === 'Option') {
    source = 'setting'
  } else if (routeName === 'Category') {
    source = 'appstore-o'
  }
  // You can return any component that you like here!
  if (focused) {
    const preIndex = TABS.findIndex((item) => item === previousPage)
    const nextIndex = TABS.findIndex((item) => item === routeName)
    let animation = 'zoomIn'
    if (nextIndex !== -1 && preIndex !== -1) {
      animation = nextIndex > preIndex ? 'slideInLeft' : 'slideInRight'
    }
    render.push(
      <Animatable.View
        key='bar'
        animation={animation}
        delay={0}
        duration={240}
        useNativeDriver
        style={[
          commonStyles.bottom_bar_active_item,
          commonStyles.bottom_bar_item_bar]}
      />
    )
    render.push(
      <Animatable.View
        key='background'
        useNativeDriver
        delay={0}
        duration={240}
        animation={animation}
        style={[
          commonStyles.bottom_bar_active_item,
          commonStyles.bottom_bar_item_overlay]}
      />
    )
    render.push(
      <Animatable.View
        key='icon'
        useNativeDriver
        delay={0}
        animation='bounceIn'
      >
        <Icon
          name={source}
          color='#ff9024'
          size={22}
        />
      </Animatable.View>
    )
  } else {
    render.push(
      <Icon
        key='icon'
        name={source}
        size={22}
      />
    )
  }
  return render
})
