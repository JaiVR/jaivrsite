import React from "react";

export default function Skills() {
    return (
        <div className="skills">
            <h3><pre><span>- &lt;/</span>&gt; -</pre></h3>
            <div className="skillscards">
                <div className="design">
                    <div className="designDiv">
                    <div className="logo">
                        <img src="figma_logo.svg"></img>
                    </div>
                    <div className="text">
                        <p>design</p>
                    </div>
                    </div>
                </div>
                <div className="content">
                    <div className="contentDiv">
                    <div className="logo">
                        <img src="css.svg"></img>
                        <img src="js.svg"></img>
                    </div>
                    <div className="text">
                        <p>content</p>
                    </div>
                    </div>
                </div>
                <div className="create">
                    <div className="createDiv">
                    <div className="logo">
                        <img src="javascript.svg"></img>
                    </div>
                    <div className="text">
                        <p>create</p>
                    </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="flexDiv">
                    <div className="logo">
                        <img src="react.svg"></img>
                    </div>
                    <div className="text">
                        <p>flex</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="nextjsdiv">
                <div className="nextjs">
                    <div className="nextimg">
                        <img src="nextjs.svg"></img>
                    </div>
                    <div className="inprogress">
                        <h3>in progress ...</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}