import React from "react";
import "./Search.css";

function search() {
    return (
        <div className="search_container">
            <h1>영화검색</h1>
            <form className="search_form">
                <input type="text" placeholder="검색어를 입력하세요"></input>
                <input type="submit" value="검색"></input>
            </form>
        </div>
    );
}

export default search;