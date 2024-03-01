import DirectoryItem from '../directory-item/directory-item.component'
import {DirectoryContainer} from './directory.styles'

const Directory = () => {
    const categories = [
        {
          "id": 1,
          "title": "Hats",
          "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
        },
        {
          "id": 2,
          "title": "Jackets",
          "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
        },
        {
          "id": 3,
          "title": "Sneakers",
          "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
        },
        {
          "id": 4,
          "title": "Womens",
          "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
        },
        {
          "id": 5,
          "title": "Mens",
          "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
        }
      ]
      return (
        <DirectoryContainer>
        {
          categories.map(({id, title,imageUrl})=>(
            <DirectoryItem key={id} title={title} imageUrl={imageUrl}/>
          ))
        }
        </DirectoryContainer>
      )
}

export default Directory