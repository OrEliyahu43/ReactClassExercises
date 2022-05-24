import React from "react"

const Card = (props) => {

    const before1990 = props.before.map((obj, index) => {
        return(
            <div key={index}>
                <>{obj.name}  </>
                <>{obj.birthday}  </>
                <>{obj.favoriteFoods.meats}  </>
                <>{obj.favoriteFoods.fish}  </>
            
            </div>
        )

    })

    return (
        <div>
                {before1990}

        </div>
    )
}

export default Card