import React, {Component} from "react";
import Notes from "./components/Notes";


// class App extends Component {
//     state = {
//         notes: [
//             {id: 1, text: "note1"},
//             {id: 2, text: "note2"},
//             {id: 3, text: "note3"},
//             {id: 4, text: "note4"},
//         ],
//         showNotes : false
//     };
//
//     showAndRemove =()=>{
//         this.setState({showNotes : !this.state.showNotes})
//     }
//
//     deleteEveryNote=(id)=>{
//         const notes = this.state.notes.filter(note=> note.id !== id );
//         this.setState({notes})
//     }
//
//     EditEveryNote = (event,id) =>{
//         const noteIndex = this.state.notes.findIndex(note=> note.id === id );
//         const notes = [...this.state.notes];
//         notes[noteIndex].text = event.target.value;
//         this.setState({notes})
//     }
//
//
//     render() {
//         console.log(this.state.showNotes)
//
//         let showingTheNotes = null;
//         if (this.state.showNotes){
//             showingTheNotes =<Notes notes={this.state.notes} onDeleteApp={this.deleteEveryNote} onEditApp={this.EditEveryNote}/>
//         }
//         return (
//             <>
//                 <button onClick={this.showAndRemove}>Show Notes</button>
//                 {showingTheNotes}
//             </>
//         )
//     }
// }
//
// export default App;

class App extends Component {
    state = {
        notes: [

        ],
        showNotes : false,
        newNotes : ""
    };

    showAndRemove =()=>{
        this.setState({showNotes : !this.state.showNotes})
    }

    deleteEveryNote=(id)=>{
        const notes = this.state.notes.filter(note=> note.id !== id );
        this.setState({notes})
    }

    EditEveryNote = (event,id) =>{
        const noteIndex = this.state.notes.findIndex(note=> note.id === id );
        const notes = [...this.state.notes];
        notes[noteIndex].text = event.target.value;
        this.setState({notes})
    }

    setNotes =(event)=>{
        this.setState({newNotes : event.target.value});

    }

    handleNewNotes=()=>{
        const notes = [...this.state.notes];
        const note = {
            id : Math.floor(Math.random() * 1000),
            text : this.state.newNotes
        }
        notes.push(note);
        this.setState({notes , newNotes:""})

    }

    render() {
        console.log(this.state.showNotes)

        let showingTheNotes = null;
        if (this.state.showNotes){
            showingTheNotes =<Notes notes={this.state.notes} onDeleteApp={this.deleteEveryNote} onEditApp={this.EditEveryNote}/>
        }
        return (
            <>
                <input type="text" onChange={this.setNotes} value={this.state.newNotes}/>
                <button onClick={this.handleNewNotes}>Add Notes</button>
                <button onClick={this.showAndRemove}>Show Notes</button>
                {showingTheNotes}
            </>
        )
    }
}

export default App;


//use lifecycle hooks

// class App extends Component {
//     state = {
//         notes: [
//
//         ],
//         showNotes : false,
//         newNotes : ""
//     };
//
//     constructor() {
//         super();
//         console.log("App-constructor called");
//     }
//
//     componentDidMount() {
//         console.log("App-componentDidMount called");
//     }
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         // console.log(prevProps);
//         // console.log(prevState);
//         // console.log(this.state);
//         console.log("App-componentDidUpdate called");
//     }
//     componentWillUnmount() {
//         console.log("App-componentWillUnmount called");
//     }
//
//     showAndRemove =()=>{
//         this.setState({showNotes : !this.state.showNotes})
//     }
//
//     deleteEveryNote=(id)=>{
//         const notes = this.state.notes.filter(note=> note.id !== id );
//         this.setState({notes})
//     }
//
//     EditEveryNote = (event,id) =>{
//         const noteIndex = this.state.notes.findIndex(note=> note.id === id );
//         const notes = [...this.state.notes];
//         notes[noteIndex].text = event.target.value;
//         this.setState({notes})
//     }
//
//     setNotes =(event)=>{
//         this.setState({newNotes : event.target.value});
//
//     }
//
//     handleNewNotes=()=>{
//         const notes = [...this.state.notes];
//         const note = {
//             id : Math.floor(Math.random() * 1000),
//             text : this.state.newNotes
//         }
//         notes.push(note);
//         this.setState({notes , newNotes:""})
//
//     }
//
//     render() {
//
//         console.log("App-render called");
//
//         // console.log(this.state.showNotes);
//
//         let showingTheNotes = null;
//         if (this.state.showNotes){
//             showingTheNotes =<Notes notes={this.state.notes} onDeleteApp={this.deleteEveryNote} onEditApp={this.EditEveryNote}/>
//         }
//         return (
//             <>
//                 <input type="text" onChange={this.setNotes} value={this.state.newNotes}/>
//                 <button onClick={this.handleNewNotes}>Add Notes</button>
//                 <button onClick={this.showAndRemove}>Show Notes</button>
//                 {showingTheNotes}
//             </>
//         )
//     }
// }
//
// export default App;


//write the code with functional component

// import React, {useState} from "react";
// import Notes from "./components/Notes";
//
// const App = () => {
//     const [state, setState] = useState({
//         notes: [
//             {id: "1", text: "hi"},
//             {id: "2", text: "hello"}
//         ],
//         showNotes: false,
//         newNotes: ""
//     })
//
//     const showAndRemove = () => {
//         setState({...state,showNotes: !state.showNotes})
//     }
//
//     const deleteEveryNote = (id) => {
//         const notes =state.notes.filter(note => note.id !== id);
//         setState({...state,notes:notes})
//     }
//
//     const EditEveryNote = (event, id) => {
//         const noteIndex =state.notes.findIndex(note => note.id === id);
//         const notes = [...state.notes];
//         notes[noteIndex].text = event.target.value;
//         setState({...state,notes:notes})
//     }
//
//     const setNotes = (event) => {
//         setState({...state,newNotes: event.target.value});
//
//     }
//
//     const handleNewNotes = () => {
//         const notes = [...state.notes];
//         const note = {
//             id: Math.floor(Math.random() * 1000),
//             text: state.newNotes
//         }
//         notes.push(note);
//         setState({...state,notes:notes, newNotes: ""})
//
//     }
//
//
//     let showingTheNotes = null;
//     if (state.showNotes) {
//         showingTheNotes =
//             <Notes notes={state.notes} onDeleteApp={deleteEveryNote} onEditApp={EditEveryNote}/>
//     }
//     return (
//         <>
//             <input type="text" onChange={setNotes} value={state.newNotes}/>
//             <button onClick={handleNewNotes}>Add Notes</button>
//             <button onClick={showAndRemove}>Show Notes</button>
//             {showingTheNotes}
//         </>
//     )
//
// }
//
// export default App;


//write functional component to use of context


// import React, {useState, createContext} from "react";
// import Notes from "./components/Notes";
//
// export const AppContext = createContext(null);
//
// const App = () => {
//     const [state, setState] = useState({
//         notes: [
//             {id: "1", text: "hi"},
//             {id: "2", text: "hello"}
//         ],
//         showNotes: false,
//         newNotes: ""
//     });
//
//     const themes = {
//         light: {
//             foreground: "#000000",
//             background: "#eeeeee"
//         },
//         dark: {
//             foreground: "#ffffff",
//             background: "#222222"
//         }
//     };
//
//     const showAndRemove = () => {
//         setState({...state, showNotes: !state.showNotes})
//     }
//
//     const deleteEveryNote = (id) => {
//         const notes = state.notes.filter(note => note.id !== id);
//         setState({...state, notes: notes})
//     }
//
//     const EditEveryNote = (event, id) => {
//         const noteIndex = state.notes.findIndex(note => note.id === id);
//         const notes = [...state.notes];
//         notes[noteIndex].text = event.target.value;
//         setState({...state, notes: notes})
//     }
//
//     const setNotes = (event) => {
//         setState({...state, newNotes: event.target.value});
//
//     }
//
//     const handleNewNotes = () => {
//         const notes = [...state.notes];
//         const note = {
//             id: Math.floor(Math.random() * 1000),
//             text: state.newNotes
//         }
//         notes.push(note);
//         setState({...state, notes: notes, newNotes: ""})
//
//     }
//
//
//     let showingTheNotes = null;
//     if (state.showNotes) {
//         showingTheNotes = (
//             <AppContext.Provider value={themes}>
//                 <Notes notes={state.notes}
//                        onDeleteApp={deleteEveryNote}
//                        onEditApp={EditEveryNote}/>
//             </AppContext.Provider>
//         )
//     }
//     return (
//         <>
//             <input type="text" onChange={setNotes} value={state.newNotes}/>
//             <button onClick={handleNewNotes}>Add Notes</button>
//             <button onClick={showAndRemove}>Show Notes</button>
//             {showingTheNotes}
//         </>
//     )
//
// }
//
// export default App;


//send state as property



// import React, {useState, createContext} from "react";
// import Notes from "./components/Notes";
//
// export const AppContext = createContext(null);
//
// const App = () => {
//     const [state, setState] = useState({
//         notes: [
//             {id: "1", text: "hi"},
//             {id: "2", text: "hello"}
//         ],
//         showNotes: false,
//         newNotes: ""
//     });
//
//
//     const showAndRemove = () => {
//         setState({...state, showNotes: !state.showNotes})
//     }
//
//     const deleteEveryNote = (id) => {
//         const notes = state.notes.filter(note => note.id !== id);
//         setState({...state, notes: notes})
//     }
//
//     const EditEveryNote = (event, id) => {
//         const noteIndex = state.notes.findIndex(note => note.id === id);
//         const notes = [...state.notes];
//         notes[noteIndex].text = event.target.value;
//         setState({...state, notes: notes})
//     }
//
//     const setNotes = (event) => {
//         setState({...state, newNotes: event.target.value});
//
//     }
//
//     const handleNewNotes = () => {
//         const notes = [...state.notes];
//         const note = {
//             id: Math.floor(Math.random() * 1000),
//             text: state.newNotes
//         }
//         notes.push(note);
//         setState({...state, notes: notes, newNotes: ""})
//
//     }
//
//
//     let showingTheNotes = null;
//     if (state.showNotes) {
//         showingTheNotes = (
//             <AppContext.Provider value={state}>
//                 <Notes notes={state.notes}
//                        onDeleteApp={deleteEveryNote}
//                        onEditApp={EditEveryNote}/>
//             </AppContext.Provider>
//         )
//     }
//     return (
//         <>
//             <input type="text" onChange={setNotes} value={state.newNotes}/>
//             <button onClick={handleNewNotes}>Add Notes</button>
//             <button onClick={showAndRemove}>Show Notes</button>
//             {showingTheNotes}
//         </>
//     )
//
// }
//
// export default App;



//send state and as properties


// import React, {useState, createContext} from "react";
// import Notes from "./components/Notes";
//
// export const AppContext = createContext(null);
//
// const App = () => {
//     const [state, setState] = useState({
//         notes: [
//             {id: "1", text: "hi"},
//             {id: "2", text: "hello"}
//         ],
//         showNotes: false,
//         newNotes: ""
//     });
//
//
//     const showAndRemove = () => {
//         setState({...state, showNotes: !state.showNotes})
//     }
//
//     const deleteEveryNote = (id) => {
//         const notes = state.notes.filter(note => note.id !== id);
//         setState({...state, notes: notes})
//     }
//
//     const EditEveryNote = (event, id) => {
//         const noteIndex = state.notes.findIndex(note => note.id === id);
//         const notes = [...state.notes];
//         notes[noteIndex].text = event.target.value;
//         setState({...state, notes: notes})
//     }
//
//     const setNotes = (event) => {
//         setState({...state, newNotes: event.target.value});
//
//     }
//
//     const handleNewNotes = () => {
//         const notes = [...state.notes];
//         const note = {
//             id: Math.floor(Math.random() * 1000),
//             text: state.newNotes
//         }
//         notes.push(note);
//         setState({...state, notes: notes, newNotes: ""})
//
//     }
//
//
//     let showingTheNotes = null;
//     if (state.showNotes) {
//         showingTheNotes = (
//             <AppContext.Provider value={{state,setState}}>
//                 <Notes notes={state.notes}
//                        onDeleteApp={deleteEveryNote}
//                        onEditApp={EditEveryNote}/>
//             </AppContext.Provider>
//         )
//     }
//     return (
//         <>
//             <input type="text" onChange={setNotes} value={state.newNotes}/>
//             <button onClick={handleNewNotes}>Add Notes</button>
//             <button onClick={showAndRemove}>Show Notes</button>
//             {showingTheNotes}
//         </>
//     )
//
// }
//
// export default App;
