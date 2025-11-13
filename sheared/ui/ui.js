import Image from "next/image"
import styles from"../ui/ui.module.css"
import { title } from "process"

export const Title = ({children}) => {
    return (
        <span className={stules.title}>{children}</span>
    )
}

export const Artist = ({Artist}) => {
    return (
    <p>{Artist}</p>
    )
}

export const Cover = ({src}) => {
    return (
        <Image src={src} alt = "обложка"/>
    )
}

export const Duration = ({Duration}) => {
    return (
        <span>{Duration}</span>
    )

}