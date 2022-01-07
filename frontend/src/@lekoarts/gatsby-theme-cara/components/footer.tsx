// SHADOWED

/** @jsx jsx */
import { Box, Flex, Link, jsx } from "theme-ui"

const Footer = () => {

  return (
    <Box as="footer" variant="footer">
      &copy; {new Date().getFullYear()}. ClaudioScalzo.com
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 1,
          color: `text`,
          fontWeight: `normal`,
          fontSize: `small`,
          a: { color: `text`, fontSize: `small` },
        }}
      >
        <div>Built with</div>
        <Link
          aria-label="Link to the Gatsby source code"
          sx={{ ml: 1 , mr: 1}}
          href="https://github.com/gatsbyjs/gatsby"
        >
          Gatsby
        </Link>
        <div>using the</div>
        {` `}
        <Link
          aria-label="Link to the theme source code"
          sx={{ ml: 1 , mr: 1 }}
          href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-cara"
        >
          Cara theme
        </Link>
      </Flex>
    </Box>
  )
}

export default Footer
