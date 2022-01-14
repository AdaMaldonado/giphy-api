import Raect, { Component} from "react";

export default function Gif({data}) {
    console.log(data)
    return (
        <div>
            {data && data.map(Item => {
                return <img src={item.images.downsized.url}/>
            })}
        </div>
    )
}