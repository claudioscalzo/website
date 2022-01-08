/** @jsx jsx */
import { Flex, jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Svg from "./svg"
import { StaticImage } from "gatsby-plugin-image"
import { UpDown, UpDownWide, UpDownFast } from "../styles/animations"
// @ts-ignore
import Intro from "../sections/intro"

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
        <Svg icon="triangle" hiddenMobile width={48} stroke color="icon_orange" left="60%" top="30%" />
        <Svg icon="hexa" width={48} stroke color="icon_red" left="70%" top="70%" />
        <Svg icon="box" width={6} color="icon_darker" left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <Svg icon="arrowUp" hiddenMobile width={16} color="icon_blue" left="80%" top="10%" />
        <Svg icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="50%" />
        <Svg icon="circle" width={16} color="icon_darker" left="70%" top="90%" />
        <Svg icon="triangle" width={16} stroke color="icon_darkest" left="15%" top="65%" />
        <Svg icon="cross" width={16} stroke color="icon_pink" left="20%" top="15%" />
        <Svg icon="circle" width={6} color="icon_darkest" left="75%" top="10%" />
        <Svg icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
      </UpDownWide>
      <Svg icon="circle" hiddenMobile width={24} color="icon_darker" left="5%" top="85%" />
      <Svg icon="circle" width={6} color="icon_darkest" left="4%" top="15%" />
      <Svg icon="circle" width={12} color="icon_darkest" left="50%" top="60%" />
      <Svg icon="upDown" hiddenMobile width={24} color="icon_darker" left="90%" top="80%" />
      <Svg icon="triangle" width={8} stroke color="icon_darker" left="25%" top="5%" />
      <Svg icon="circle" width={64} color="icon_green" left="85%" top="-15%" />
      <Svg icon="box" hiddenMobile width={64} color="icon_purple" left="25%" top="90%" />
      <Svg icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
      <Svg icon="box" width={12} color="icon_darkest" left="45%" top="45%" />
      <Svg icon="hexa" width={16} stroke color="icon_darker" left="10%" top="50%" />
      <Svg icon="hexa" width={8} stroke color="icon_darker" left="80%" top="70%" />
      <UpDownFast>
        <Flex
          sx={{
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          <Svg icon="arrowDown" width={20} top="85%" opacity="100%"/>
        </Flex>
      </UpDownFast>
    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <Intro />
      </Inner>
    </Content>
    <Content speed={-0.22} offset={offset + 0.2} factor={factor}>
      <StaticImage data-sal="fade" src="../../../images/profile.png" alt="Claudio Scalzo" width={800} sx={{position: "absolute", top: -120, right: "-25rem"}}/>
    </Content>
  </div>
)

export default Hero
