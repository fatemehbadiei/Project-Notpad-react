import React, {Component} from "react";
import Note from "./Note";

// class Notes extends Component {
//     state = {};
//
//     render() {
//         return (
//             <ul>
//                 {this.props.notes.map(note => <Note key={note.id} note={note} onDelete={()=>this.props.onDeleteApp(note.id)} onEdit={(event)=>this.props.onEditApp(event,note.id)}/>)}
//             </ul>
//
//         )
//     }
// }
//
// export default Notes;



class Notes extends Component {
    state = {};

    render() {
        return (
            <ul>
                {this.props.notes.map(note => <Note key={note.id} note={note} onDelete={()=>this.props.onDeleteApp(note.id)} onEdit={(event)=>this.props.onEditApp(event,note.id)}/>)}
            </ul>

        )
    }
}

export default Notes;




//write top code with functional components

// import React from "react";
// import Note from "./Note"

// const Notes = (props) => {
//     return (
//         <ul>
//             {props.notes.map(note => <Note key={note.id} note={note} onDelete={()=>props.onDeleteApp(note.id)} onEdit={(event)=>props.onEditApp(event,note.id)}/>)}
//         </ul>
//
//     )
// }
//
// export default Notes;


//destructuring

// const Notes = ({notes,onDeleteApp,onEditApp}) => {
//     return (
//         <ul>
//             {notes.map(note => <Note key={note.id} note={note} onDelete={()=>onDeleteApp(note.id)} onEdit={(event)=>onEditApp(event,note.id)}/>)}
//         </ul>
//
//     )
// }
//
// export default Notes;




//use lifecycle hooks

// class Notes extends Component {
//     state = {};
//     constructor() {
//         super();
//         console.log("Notes-constructor called");
//     }
//
//     componentDidMount() {
//         console.log("Notes-componentDidMount called");
//     }
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         // console.log(prevProps);
//         // console.log(prevState);
//         // console.log(this.state);
//         console.log("Notes-componentDidUpdate called");
//     }
//     componentWillUnmount() {
//         console.log("Notes-componentWillUnmount called");
//     }
//
//     render() {
//         console.log("Notes-render called");
//         return (
//             <ul>
//                 {this.props.notes.map(note => <Note key={note.id} note={note} onDelete={()=>this.props.onDeleteApp(note.id)} onEdit={(event)=>this.props.onEditApp(event,note.id)}/>)}
//             </ul>
//
//         )
//     }
// }
//
// export default Notes;



//write functional component to use of context


// import React,{useContext} from "react";
// import Note from "./Note";
// import {AppContext} from "../App";
//
// const Notes = ({notes,onDeleteApp,onEditApp}) => {
//     const {dark} =useContext(AppContext);
//     console.log(dark)
//     return (
//         <ul>
//             {notes.map(note => <Note key={note.id} note={note} onDelete={()=>onDeleteApp(note.id)} onEdit={(event)=>onEditApp(event,note.id)}/>)}
//         </ul>
//
//     )
// }
//
// export default Notes;



//send state as property

// import React,{useContext} from "react";
// import Note from "./Note";
// import {AppContext} from "../App";
//
// const Notes = ({onDeleteApp,onEditApp}) => {
//     const {notes} =useContext(AppContext);
//     console.log(notes)
//     return (
//         <ul>
//             {notes.map(note => <Note key={note.id} note={note} onDelete={()=>onDeleteApp(note.id)} onEdit={(event)=>onEditApp(event,note.id)}/>)}
//         </ul>
//
//     )
// }
//
// export default Notes;



//send state and as properties

// import React,{useContext} from "react";
// import Note from "./Note";
// import {AppContext} from "../App";
//
// const Notes = ({notes,onDeleteApp,onEditApp}) => {
//     const {state,setState} =useContext(AppContext);
//     console.log(state,setState)
//     return (
//         <ul>
//             {notes.map(note => <Note key={note.id} note={note} onDelete={()=>onDeleteApp(note.id)} onEdit={(event)=>onEditApp(event,note.id)}/>)}
//         </ul>
//
//     )
// }
//
// export default Notes;