import React from "react";
class ErrorBoundary extends React.Component {
  state = {
    error: false
  }

  componentDidCatch(error, info) {
    console.log(error,info)
  }

  render() {
    if(this.state.error) {
      return <h1 style={{color: 'white'}}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, corrupti. Amet quas, est doloremque eos, vero sit, omnis dicta quisquam placeat minima dolores. Necessitatibus optio vel iusto a, minima dolorum consequuntur voluptas magnam officia corporis libero quam excepturi suscipit mollitia odit aliquam. Velit veniam, debitis non incidunt natus laborum voluptatem perspiciatis quaerat, eum eos ex magni. Et iste ipsam ut vel fugit praesentium tempora! Commodi magnam cupiditate non omnis eaque, dignissimos nobis esse repudiandae perferendis laborum praesentium quod nostrum corporis? Labore tempore, placeat quam nam consectetur minus magnam ex omnis, quisquam aliquam est suscipit alias nesciunt, ut quas vitae aut!
      </h1>
    }

    return this.props.children
  }
}
export {ErrorBoundary}