import Image from "next/image"


export const Title = ({children}) => {
    return (
        <span>{children}</span>
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