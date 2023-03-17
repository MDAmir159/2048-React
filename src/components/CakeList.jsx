const CakeList = (props) => {
    // console.log(item);
    const {cakeImg, cakeName, cakeCallories} = props.item 
    return (
        <div className="cake-details">
            <div className="image-container">
                <img src= {cakeImg} />
            </div>
            <div className="details-text">
                <span >{cakeName} ({cakeCallories} Kcal)</span>
                {/* console.log(cakeCallories); */}
            </div>
        </div>
    )
} 

export default CakeList