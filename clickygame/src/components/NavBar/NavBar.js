import React from "react";
// import "./FriendCard.css";

const NavBar = props => (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Score: Top Score:</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <span class="navbar-text">
            Click on an image to earn points, but don't click on any more than once!
            </span>
        </div>
    </nav>
    <hr></hr>
    </div>
);

export default NavBar;
