import React from "react";

const Header = () => {
    return (
        <header class="container bg-danger border border-warning">
        <div class="d-flex justify-content-between">
            <div class="p-2">
                <h1 class="text-white">My Portfolio</h1>
            </div>
            <div class="p-2"></div>
            <div class="p-2 pull-right">
                <nav>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item">
                            <a href="/">About</a>
                        </li>
                        <li class="list-group-item">
                            <a href="/portfolio">Portfolio</a>
                        </li>
                        <li class="list-group-item">
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>  
                 </nav>
            </div>
        </div>
    </header>
    );
};

export default Header;