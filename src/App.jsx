import React, { Component } from "react"

import Text from "./components/Text"

class App extends Component {
    state = { text: "" }

    changeText(event) {
        this.setState({ text: event.target.value });
    }

    render() {
        return (
            <div className="container">
                <input
                    type="text"
                    value={this.state.text}
                    onChange={this.changeText.bind(this)}
                    placeholder="Type here"
                    style={{
                        padding: ".6em",
                        fontSize: "1.2em",
                        margin: "0px auto",
                        width: "80%"
                    }}
                />
                <svg width="100%" height="600">
                    <Text x="32" y="300" text={this.state.text} />
                </svg>
            </div>
        )
    }
}

export default App
