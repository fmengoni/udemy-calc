import React from "react";
import PropTypes from "prop-types"
import Button from "./Button";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const renderButtons = onClickNumber => {
    // var number = 0
    // iterar desde el botón 1 al 0 
    // <Button text="{number.toString()}" type="type1" clickHandler={onClickNumber}/>
    const renderButton = number => (
        <Button text={number.toString()} clickHandler={onClickNumber}/>
    )

    return numbers.map(renderButton)
}

const Numbers = ({onClickNumber}) => (
    <section className="numbers">
        {
            renderButtons(onClickNumber)
        }
    </section>
)

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers