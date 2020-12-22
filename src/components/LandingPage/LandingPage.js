import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import SignUp from '../SignUp/SignUp'
import './LandingPage.css'

export default class LandingPage extends Component{
    render(){
        return(
            <div className='LandingPage'>
                 <header className='app-header'>
                    <h1>KeepBox</h1>
                    <h2>digital storage for your keepsakes</h2>   
                </header>
                <section>
                    <header>
                        <h3>Store your child's art</h3>
                    </header>
                    <p>[<em>placeholder for screenshot of album interface</em>]</p>
                    <p>KeepBox helps you keep track of you child's artistic and creative milstones. You can transform your unorganized box of handmade cards and school projects into an interactive album for you, your child, and loved ones.</p>
                </section>
                <section>
                    <header>
                        <h3>Share with loved ones.</h3>
                    </header>
                    <p>[<em>placeholder for screenshot of album access interface</em>]</p>
                    <p>The key to helping your children recycle their many art projects is sharing this storage space with them. With these milestones stored digitaly now everyone can feel better about cleaning out the craft drawer, tear free.</p>
                </section>
                <section>
                    <header>
                        <h3>Keep track of their progress</h3>
                    </header>
                    <p>[<em>placeholder for screenshot of photo stats/tags UI</em>]</p>
                    <p>Interactive photo details help you track your child's creative milestones.</p>
                </section>
                <SignUp/>
           </div>
        )
    }
}
        