import type { Variants } from "framer-motion";

export const  fadeIn = (direction: "up" | "down" | "left" | "right", delay:number):Variants =>{
    return{
        hidden:{
            y:direction === "up" ? -60 : direction === "down" ? 60 :0,
            opacity:0,
            x:direction ===  "left" ? -60 : direction === "right" ? 60 : 0,
        },
        show:{
            x:0,
            y:0,
            opacity:1,
            transition:{
                type:"tween",
                delay:delay,
                duration:1.2,
                ease:[0.25, 0.25, 0.25, 0.75],
            }
        }

    }
}