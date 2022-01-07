// SHADOWED

/** @jsx jsx */
import { Box, Flex, Link, jsx } from "theme-ui"
import Gatsby from "../../../images/gatsby.svg";
import GitHub from "../../../images/github.svg";
import AWS from "../../../images/aws.svg";

const Footer = () => {
  return (
    <Box as="footer" variant="footer">
      &copy; {new Date().getFullYear()} Claudio Scalzo
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 1,
          color: `text`,
          fontWeight: `normal`,
          fontSize: `small`,
          a: { fontSize: `small` },
        }}
      >
        <Link
          aria-label="Link to the Gatsby source code"
          href="https://github.com/gatsbyjs/gatsby"
          style={{
            "display": "inline-flex",
            "align-items": "center",
          }}
        >
          Powered by the <Gatsby width="1rem" sx={{ ml: 1, mr: 1}}/> Gatsby web framework
        </Link>
      </ Flex>
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 1,
          color: `text`,
          fontWeight: `normal`,
          fontSize: `small`,
          a: { fontSize: `small` },
        }}
      >
        <Link
          aria-label="Link to the frontend source code"
          href="https://github.com/claudioscalzo/website/tree/master/frontend"
          style={{
            "display": "inline-flex",
            "align-items": "center",
          }}
        >
          Source code available on <GitHub width="1rem" sx={{ ml: 1, mr: 1}}/> GitHub
        </Link>
      </Flex>
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 1,
          color: `text`,
          fontWeight: `normal`,
          fontSize: `small`,
          a: { fontSize: `small` },
        }}
      >
        <Link
          aria-label="Link to the infrastructure source code"
          href="https://github.com/claudioscalzo/website/tree/master/infrastructure"
          style={{
            "display": "inline-flex",
            "align-items": "center",
          }}
        >
          Hosted on <AWS width="1.5rem" sx={{ ml: 1}}/>
        </Link>
      </Flex>
    </Box>
  )
}

export default Footer
