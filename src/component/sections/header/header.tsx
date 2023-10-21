import { Component } from "solid-js";
import "./header.scss";

const Header: Component<{}> = (props) => {
	return (
		<div class="header--container">
            <div class="header--sub--container">
                <div class="header--logo--container">
                    <p>Ola</p>
                </div>

                <div class="header--utils--container">

                </div>
            </div>
		</div>
	);
};

export default Header;
