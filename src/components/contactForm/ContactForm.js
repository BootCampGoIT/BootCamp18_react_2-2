import React, { Component } from 'react';
import { uuid } from 'uuidv4';

class ContactForm extends Component {
    state = {
        name: "",
        number: "",
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.submitContact({ name: this.state.name, number: this.state.number, id: uuid() });
        this.setState({
            name: "",
            number: "",
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <h2>Name</h2>
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
                    <h2>Number</h2>
                    <input type="text" name="number" onChange={this.handleChange} value={this.state.number} />
                    {/* <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="number" onChange={this.handleChange} value={this.state.number} /> */}
                    <button type="submit">Add contact</button>

                </form>


            </>
        );
    }
}

export default ContactForm;