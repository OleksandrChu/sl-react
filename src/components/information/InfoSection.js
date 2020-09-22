import React from "react";
import "./InfoSection.css"

export default function InfoSection(props) {
    const {title, details} = props;
    return (
        <section>
            <h2>{title}</h2>
            {
                Object.entries(details).map(([key, value]) =>
                    <div key={key} className='item-container'>
                        <p className='title-container'>{key} :</p>
                        <p className='desc-container'>{value}</p>
                    </div>
                )
            }
        </section>
    );
}