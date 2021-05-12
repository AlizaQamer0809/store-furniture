import React  from 'react'

export default function Title ({name , title}){
    
        return (
            <div className="row">
                <div className="col-10 mx-auto my-2 text-center text-title">
                    <h1 style={{color:"darkred" ,marginLeft:"-150px"  , fontFamily:'Century Gothic'}} >
                        <strong >{name} </strong>
                      
                    </h1>
                    <br>
                    </br>
                    <h1 style={{color:"darkred" ,marginTop:'-35px'  , fontFamily:'Century Gothic'}} >
                        <strong >{title}</strong>
                    </h1>
                </div>
                
            </div>
        )
    }

