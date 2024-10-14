import React, { useState } from 'react'


function Board({value, handleBtn}) {
    
    return <>
        <button className="square" onClick={handleBtn}>{value}</button>
    </>
}

export default Board;