import React from "react";
function Card(props) {

    return (
        <>
            <div className="cards">
                <div className="card">
                    <img
                        src={props.imgsrc}
                        alt="Mypic"
                        className="card_img"
                    />
                    <div className="card_info">
                        <span className="card_catagory"> {props.title}</span>
                        <h3 className="card_title">{props.sname}</h3>
                        <a href={props.link} >
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;