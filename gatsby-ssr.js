/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require("react")



exports.onRenderBody = ({
  setHeadComponents,
  setPostBodyComponents,
  element,
  props
}) => {
  setHeadComponents([
     <link
        src="css/style.css"
      />,
    <link rel="icon" href="/static/favicon-914d0879a3c3bbbe2662846631db9c8b.ico" type="image/x-icon"/>
  ])
  setPostBodyComponents([

<script src="/static/jq-13c0a5055cca7b2463b2f73701960b9e.js"></script>,
<script src="/static/main-9a2dc0bec4f5762deb037d706f903b72.js"></script>

  ])
}
