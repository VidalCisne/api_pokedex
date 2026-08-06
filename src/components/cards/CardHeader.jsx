import CardHeaderImg from "./CardHeaderImg"

export const CardHeader = (
    { children }
)=>{
    return (
        <div className="card-header">
            {children}
        </div>
    )
}

export const CardHeaderWithImage = (
    {
        imgUrl,
        altText
    }
) => {
    return (
        <div className="card-header">
            <CardHeaderImg
                imgSrc={imgUrl}
                altText={altText}
            />
        </div>
    )
}

