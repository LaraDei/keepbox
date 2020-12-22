import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'

export default class AddPhoto extends Component{
    render(){
        return(
            <div className='AddPhoto'>
                <h2>Upload a New Photo</h2>
                <form className='add-photo-form'>
                    <section className="form-section overview-section">
                        <label for="photo-title">Photo title</label>
                        <input type="text" name="photo-title" placeholder="Birthday card" required/>
                    </section>
                    <section className="form-section overview-section">
                        <label for="photo-summary">Photo summary</label>
                        <textarea name="photo-summary" rows="15" required></textarea>
                    </section>
                    <section className="album-container" >
                        <label for="album">Albums</label>
                        <input type="test" name="album" id="hours-slept" placeholder="..."/>
                    </section>
                    <section className="form-section overview-section">
                        <label for="photo-summary-child">Photo summary in child's words</label>
                        <textarea name="photo-summary" rows="15" required></textarea>
                    </section>
                    <section className="form-section">
                        <label className="photo-date-label" for="date-month">Date of Art</label>
                        <input type="number" name="date-month" id="date-month" placeholder="01" min="1" max="12" required=""/> .
                        <input type="number" name="date-day" className="date-day"  placeholder="01" min="1" max="31" required=""/> .
                        <input type="number" name="date-year" className="date-year" placeholder="2017" min="2016" max="2017" required=""/>
                    </section>
                    <section className="child age" >
                        <label for="child-age">child's age</label>
                        <input type="number" name="child-age" id="child-age" placeholder="4"/>
                    </section>
                    <section className="form-section upload-photo-section">
                        <h2>Upload Photo</h2>
                        <button type="select">select Photos</button>
                    </section>
                    <section className="button-section">
                        <button type="submit">Submit</button>
                        <button type="reset">Reset</button>
                    </section>
                </form>
            </div>
        )
    }
}