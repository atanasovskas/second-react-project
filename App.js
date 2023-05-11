import React from "react"
import Contact from"./Contact"

/* Challenge:

- Create a Contact.js component in another file
- Move one of the contact card divs below into that file
- import and render 4 instances of that contact card
    - Think ahead: what's the problem with doing it this way?
*/

function App() {
    return (
        <div className="contacts">
        <Contact 
        img="./images/fluffykins.png"
        name="Fluffykins"
        contact="(212) 555-2345"
        mail="fluff@me.com"
        />
        <Contact
        img="./images/mr-whiskerson.png"
        name="Mr. Whiskerson"
        contact="(212) 555-1234"
        mail="mr.whiskaz@catnap.meow"
        />
        <Contact
        img="./images/felix.png"
        name="Felix"
        contact="(212) 555-4567"
        mail="thecat@hotmail.com"
        />
        <Contact
        img="./images/pumpkin.png"
        name="Pumpkin"
        contact="(0800) CAT KING"
        mail="pumpkin@scrimba.com"/>
        </div>
    )
}

export default App