import React from 'react';

const Article = ({auteur,titre,desc,urlNews,image,date}) => {
    return(
        <React.Fragment>
            <h2>{titre}</h2>
            <div className='text-center'>
                <img src={image} alt={titre} className="rounded border w-75"/>
            </div>
            <div>
                <p>
                    {desc}
                </p>
                <a href={urlNews} >En savoir plus ...</a>
            </div>
            <div>
                <p>{auteur}</p>
                <p>{date}</p>
            </div>
        </React.Fragment>
    )
}

export default Article