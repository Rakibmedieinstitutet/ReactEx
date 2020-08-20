import React from "react";
import displaCyENT from "displacy-ent";



const Display= ()=>{
    const displacy = new displaCyENT('http://localhost:5000', {
    container: '#displacy',
    defaultText: 'When Sebastian Thrun started working on self-driving cars at Google in 2007, few people outside of the company took him seriously.',
    defaultEnts: ['person', 'org', 'date']
});

const text = 'When Sebastian Thrun started working on self-driving cars at Google in 2007, few people outside of the company took him seriously.';
const spans = [ { end: 20, start: 5, type: "PERSON" }, { end: 67, start: 61, type: "ORG" }, { end: 75, start: 71, type: "DATE" } ];
const ents = ['person', 'org', 'gpe', 'loc', 'product'];

const x = displacy.render(text, spans, ents);
    return (
        <div> 
            {x}
        </div>
    )
}
export default Display