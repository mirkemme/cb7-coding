import { useState } from "react"
import "./Stories.css"
import { LikeIcon } from "../../icons";
import Story from "../story";


const Stories = ({ stories }) => {
    return (
        <div className="Stories">
            <ul className="Stories__list">{stories && stories.map((story) =>
                <li className="Stories__item" key={story.id}><Story story={ story } /></li>)}
            </ul>
        </div>
    )
}

export default Stories;