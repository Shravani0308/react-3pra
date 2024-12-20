function HandleClick(event){
    alert("hello");
    console.log(event)
}

function HandleMouseOver(){
    alert("bye!");
}

function HandleDbClick(){
    alert("you clicked double times")
}

export default function Button (){
    return(
<div>
    <button onClick={HandleClick}>
        click me!
    </button>
    <p onMouseOver={HandleMouseOver}>this parah is for event 
        demo Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Voluptatum, nostrum.</p>
        <button onDoubleClick={HandleDbClick}>double click me!</button>
</div>
    );
}