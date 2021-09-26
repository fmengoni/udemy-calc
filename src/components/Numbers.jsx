import React from "react";
import PropTypes from "prop-types"
import Button from "./Button";

const Numbers = ({onClickHandler}) => (
    <section className="numbers">
        <Button text="1" type="type1" clickHandler={onClickHandler}/>
        <Button text="2" type="type1" clickHandler={onClickHandler}/>
        <Button text="3" type="type1" clickHandler={onClickHandler}/>
        <Button text="4" type="type1" clickHandler={onClickHandler}/>
        <Button text="5" type="type1" clickHandler={onClickHandler}/>
        <Button text="6" type="type1" clickHandler={onClickHandler}/>
        <Button text="7" type="type1" clickHandler={onClickHandler}/>
        <Button text="8" type="type1" clickHandler={onClickHandler}/>
        <Button text="9" type="type1" clickHandler={onClickHandler}/>
        <Button text="0" type="type1" clickHandler={onClickHandler}/>
    </section>
)

export default Numbers