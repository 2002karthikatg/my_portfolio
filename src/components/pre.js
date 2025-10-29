import React from "react";
// import '../style.css';
function Preloader({load}) {

    return <div id={load ? "preloader" : "preloader-none"}></div>;
}
export default Preloader;