import React, { Component } from "react";
import "@google/model-viewer"
import "./Home.css";

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <div className="home-container-with-bg-img">
                    <div className="container">
                        <div className="row">
                            <div className="home-block col">
                                <h1>Character Tracker</h1>
                                <p className="para">Un système vous permettant de créer des relations entre vos personnages de séries préférées</p>
                            </div>
                            <div className="home-block col">
                                <model-viewer src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.glb?1542147958948"
                                    ios-src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.usdz?v=1569545377878"
                                    poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
                                    alt="A 3D model of an astronaut"
                                    shadow-intensity="1"
                                    camera-controls
                                    auto-rotate ar>
                                    <div className="progress-bar" slot="progress-bar"></div>
                                </model-viewer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
