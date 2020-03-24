import React, { Component } from 'react';

import './item-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

const Record = ({item, field, label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  )
}

export {
  Record
}

export default class itemDetails extends Component {

  swapiService = new SwapiService()

  state = {
    item: null,
    loading: true,
    image: null
  }

  componentDidUpdate(prevProps) {
    if (this.props.item !== prevProps.item) {
      this.setState({loading: true})
      this.updateItem()
    }
  }

  componentDidMount() {
    this.updateItem()
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props
    if (!itemId) {
      return
    }

    getData(itemId)
      .then((item) => {
        this.setState({ item, loading: false, image: getImageUrl(item)})
      })
  }

  render() {

    if (this.state.loading) {
      return <Spinner/>
    }

    if (!this.state.item) {
      return <span>Select pa item from a list</span>
    }

    const {image, item} = this.state

    const {
      name
     } = this.state.item;

    return (
      <div className="item-details card">
        <img className="item-image"
          src={image} 
          alt="item"
        />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item })
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}