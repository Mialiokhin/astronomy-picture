import { useCallback, useEffect, useState } from "react"

import debounce from "lodash.debounce"

import { breakpointsAsInts } from "@/app/_components/theme"

type Return = {
  isMobile: boolean
  isTablet: boolean
  isTabletLandscape: boolean
  isDesktop: boolean
  width: number
}

const useDeviceDetect = (): Return => {
  const [deviceState, setDeviceState] = useState({
    isMobile: false,
    isTablet: false,
    isTabletLandscape: false,
    isDesktop: false,
    width: 0,
  })

  const resizeHandler = useCallback(() => {
    const width = window.innerWidth
    setDeviceState({
      isMobile: width < breakpointsAsInts[0],
      isTablet: width >= breakpointsAsInts[0] && width < breakpointsAsInts[1],
      isTabletLandscape: width >= breakpointsAsInts[1] && width < breakpointsAsInts[2],
      isDesktop: width >= breakpointsAsInts[2],
      width,
    })
  }, [])

  useEffect(() => {
    const debouncedResizeHandler = debounce(resizeHandler, 300)
    window.addEventListener("resize", debouncedResizeHandler)

    return () => window.removeEventListener("resize", debouncedResizeHandler)
  }, [resizeHandler])

  return deviceState
}

export default useDeviceDetect
