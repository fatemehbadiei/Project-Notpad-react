import React,{Component} from "react";

// class Note extends Component{
//     state={
//
//     };
//     render() {
//         const {id , text} =this.props.note;
//         return(
//             <>
//                 <li>{id} : {text}
//                     <button onClick={this.props.onDelete}>X</button>
//                     <input type="text" onChange={this.props.onEdit}/>
//                 </li>
//             </>
//         )
//     }
// }
// export default Note;




class Note extends Component{
    state={

    };
    render() {
        const {id,text} =this.props.note;
        return(
            <>
                <li>{id} : {text}
                    <button onClick={this.props.onDelete}>X</button>
                    <input type="text" onChange={this.props.onEdit}/>
                </li>
            </>
        )
    }
}
export default Note;



//write top code with functional components

// import React from "react";
//
// const Note = ({note,onDelete,onEdit}) => {
//     return(
//         <>
//             <li>{note.id} : {note.text}
//                 <button onClick={onDelete}>X</button>
//                 <input type="text" onChange={onEdit}/>
//             </li>
//         </>
//     )
// }
//
// export default Note;




//use lifecycle hooks

// class Note extends Component{
//     state={
//
//     };
//     constructor() {
//         super();
//         console.log("Note-constructor called");
//     }
//
//     componentDidMount() {
//         console.log("Note-componentDidMount called");
//     }
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         // console.log(prevProps);
//         // console.log(prevState);
//         // console.log(this.state);
//         console.log("Note-componentDidUpdate called");
//     }
//     componentWillUnmount() {
//         console.log("Note-componentWillUnmount called");
//     }
//     render() {
//         console.log("Note-render called");
//         const {id , text} =this.props.note;
//         return(
//             <>
//                 <li>{id} : {text}
//                     <button onClick={this.props.onDelete}>X</button>
//                     <input type="text" onChange={this.props.onEdit}/>
//                 </li>
//             </>
//         )
//     }
// }
// export default Note;