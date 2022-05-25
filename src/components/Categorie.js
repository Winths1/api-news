import { Button } from 'react-bootstrap'

const Categories = ({updateApiUrl}) => {

    let apiKey = process.env.API_KEY;
    const changeCategorie = str => {
        updateApiUrl(`https://newsapi.org/v2/top-headlines?country=fr&${str}apiKey=${apiKey}`) ;
    }

    return (
        <div className='container text-center'>
            <Button className="mx-1 my-1" variant="outline-secondary" onClick={() => changeCategorie('')}>Reset</Button>{''}
            <Button className="mx-1 my-1" variant="outline-secondary" onClick={() => changeCategorie("category=business&")}>business</Button>{''}
            <Button className="mx-1 my-1" variant="outline-secondary" onClick={() => changeCategorie("category=entertainment&")}>entertainment</Button>{''}
            <Button className="mx-1 my-1" variant="outline-secondary" onClick={() => changeCategorie("category=health&")}>health</Button>{''}
            <Button className="mx-1 my-1" variant="outline-secondary" onClick={() => changeCategorie("category=science&")}>science</Button>{''}
            <Button className="mx-1 my-1" variant="outline-secondary" onClick={() => changeCategorie("category=sports&")}>sports</Button>{''}
            <Button className="mx-1 my-1" variant="outline-secondary" onClick={() => changeCategorie("category=technology&")}>technology</Button>{''}
        </div>
    )
}

export default Categories