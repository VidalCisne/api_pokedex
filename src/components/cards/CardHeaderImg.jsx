const CardHeaderImg = (
    {
        imgSrc,
        altText,
        className = "card-header-img"
    }
)=>{
    return (
        <img
            className={className}
            src= {imgSrc}
            alt = {altText??'No Text'}
            />
    )
}

export default CardHeaderImg;