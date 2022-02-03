import React, { Component } from "react";
import "./Home.css";

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <div class="home-container-with-bg-img">
                    <div class="container">
                        <div class="row">
                            <div class="home-block col">
                                <h1>Character Tracker</h1>
                                <p>Un système vous permettant de créer des relations entre vos personnages de séries préférées</p>
                            </div>
                            <div class="home-block col">
                                {/*
                                <h1>Character Tracker</h1>
                                <p>Un système vous permettant de créer des relations entre vos personnages de séries préférées</p>
                                */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

{/*
                <div class="home-container-with-bg-img">
                    <div class="container">
                        <div class="row">
                            <div class="home-block-left d-block col-md-4 col-lg-6 col">
                                <h1>Character Tracker</h1>
                                <p>Un système vous permettant de créer des relations entre vos personnages de séries préférées</p>
                            </div>

                            <div class="home-block-rigth d-block col-md-4 col-lg-6 col">
                                <h1>Character Tracker</h1>
                                <p>lol</p>
                            </div>
                        </div>
                    </div>
                </div>
                */}

{/*
                    <div class="home-info">
                    </div>
                    */}

{/* <h1>Hello, world!</h1>
        <p>Welcome to your new single-page application, built with:</p>
        <ul>
          <li>
            <a href="https://get.asp.net/">ASP.NET Core</a> and{" "}
            <a href="https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx">
              C#
            </a>{" "}
            for cross-platform server-side code
          </li>
          <li>
            <a href="https://facebook.github.io/react/">React</a> for
            client-side code
          </li>
          <li>
            <a href="http://getbootstrap.com/">Bootstrap</a> for layout and
            styling
          </li>
        </ul>
        <p>To help you get started, we have also set up:</p>
        <ul>
          <li>
            <strong>Client-side navigation</strong>. For example, click{" "}
            <em>Counter</em> then <em>Back</em> to return here.
          </li>
          <li>
            <strong>Development server integration</strong>. In development
            mode, the development server from <code>create-react-app</code> runs
            in the background automatically, so your client-side resources are
            dynamically built on demand and the page refreshes when you modify
            any file.
          </li>
          <li>
            <strong>Efficient production builds</strong>. In production mode,
            development-time features are disabled, and your{" "}
            <code>dotnet publish</code> configuration produces minified,
            efficiently bundled JavaScript files.
          </li>
        </ul>
        <p>
          The <code>ClientApp</code> subdirectory is a standard React
          application based on the <code>create-react-app</code> template. If
          you open a command prompt in that directory, you can run{" "}
          <code>npm</code> commands such as <code>npm test</code> or{" "}
          <code>npm install</code>.
        </p> */}