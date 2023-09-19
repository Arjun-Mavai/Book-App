import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <img
          src="https://media1.giphy.com/media/qaDbEDavgvKBs5jJc5/giphy.gif?cid=ecf05e47br99glejgtnw8s5mwm21z8m8gd95z9u1c5uq5anb&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          alt=""
        />
      );
      // <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
