import React, { Component } from 'react'
import Logo from '../components/OHIFLogo/OHIFLogo'
import './style.css'


class FormPatient extends Component {

    render() {
        return (
            <div>
                    <img src={Logo}/>
                    <h1>Add a New Patient</h1>
                <form>
                    <input type="text" placeholder="First Name..." /><br />
                    <input type="text" placeholder="Last Name..." /><br />
                    <input type="date" /><br />
                    <select defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    <input type="file" id="file" multiple />
                    <label class="file" for="file">Upload URM Image</label><br />
                    <input type="submit" value="Add" />
                </form>

            </div>

        )
    }
}

export default FormPatient
