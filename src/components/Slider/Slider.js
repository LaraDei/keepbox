import React, {Component} from 'react'
import Context from '../../context'
import './Slider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from'@fortawesome/free-solid-svg-icons'
import Photo from '../Photo/Photo'

export default class Slider extends Component{
    static defaultProps = {
        match: {
          params: {}
        }
      }
       
    static contextType = Context

    constructor(props){
        super(props)
        this.state = {
            current: 0,
            length: this.props.length
        }
    }
    nextSlide = () => {
        this.setState(prevState => {
            if( prevState.current === this.state.length - 1){
                return{
                    current: 0
                  }
            }
            else return{
            current: prevState.current + 1
          }})
      }
    
    prevSlide = () => {
        this.setState(prevState => {
            if( prevState.current === 0){
                return{
                    current: this.props.length - 1
                  }
            }
            return{
            current: prevState.current - 1
          }})
      }

    render(props){
        console.log(this.props)
        console.log(this.state)
        return (
            <div className='slider-wrapper'>
                <div className='button-wrapper'>
                <button className='back' onClick={this.prevSlide}><FontAwesomeIcon icon={faChevronLeft} /></button>
                <button className='next' onClick={this.nextSlide}><FontAwesomeIcon icon={faChevronRight} /></button>
                </div>
                <div className='slider'>
                    {this.props.photos.map((photo, index) => {
                        return (
                            <div
                                className={index === this.state.current ? 'slide active' : 'slide'}
                                key={index}
                            >
                                {index === this.state.current && (
                                    <Photo
                                    id={photo.id}
                                    caption={photo.caption}
                                    age={photo.age}
                                    url={photo.file_location}
                                />
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

