import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import themeUi, { jsx } from "theme-ui"

const Button = ({ variant = "primary", ...props }) => (
  <button
    {...props}
    sx={{
      appearance: "none",
      display: "inline-block",
      textAlign: "center",
      fontSize: ["xs", "sm"],
      m: 0,
      px: 3,
      py: 2,
      border: 0,
      borderRadius: 4,
      variant: `buttons.${variant}`,
    }}
  />
)

const Text = ({ variant = "heading", ...props }) => (
  <p
    {...props}
    sx={{
      m: 0,
      variant: `text.${variant}`,
    }}
  />
)



const SecondPage = () => (
  <div>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <>
    <Button>Primary</Button>
    <Button variant="secondary">Secondary</Button>
  </>
  <Text>test</Text>
  </div>
)

export default SecondPage
