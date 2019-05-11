import React from 'react';
import "./Appearance.scss";
import AppearanceColors from "./AppearanceColors/AppearanceColors"

function Appearance() {

    return (
        <article className="Appearance">
            <div className="appearance-section">
                <h2 className="appearance-section__title">Wygląd</h2>
                <p className="appearance-section__desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies eu nulla id lacinia. M
                    auris vulputate vel ante vitae dapibus. Morbi dapibus, purus sed iaculis pulvinar, est velit rho
                    ncus elit, nec dapibus neque sem ac metus. Maecenas sit amet ligula vestibulum, euismod quam non
                    , lobortis urna. Donec v
            <br />

                    arius fringilla leo, venenatis tempus massa porta at. Nulla ac libero vive
                    rra, sagittis leo in, dictum orci. Fusce fringilla, nunc sed porttitor placerat, sem elit molestie sa
                    pien, in elementum massa magna id risus. In placerat euismod lacus et mattis. Ut pretium fringilla m
                    i molestie ultrices. Phasellus rhoncus vestibulum suscipit. Nulla elit leo, convallis ac iaculis eget
                    , porta vitae sem.
            <br />

                    Nulla placerat purus id mauris molestie pellentesque. Quisque ut tincidunt nulla. Cras convallis
                        ut lorem vitae vulputate. Aliquam a pellentesque nulla. Nam suscipit gravida vulputate. Aliquam dictum
                        auctor dolor. Integer quis lorem egestas ante porta congue ac non orci. Morbi sit amet mi ut lorem viver
                     ra sodales sit amet eu neque.
            </p>
            </div>

            <AppearanceColors color_1="red" color_2="green" color_3="yellow" 
            color_skin="rgb(247, 215, 169)" color_hair="black"
            color_eye_1="red" color_eye_2="blue"
            />
        </article>
    )
}
export default Appearance