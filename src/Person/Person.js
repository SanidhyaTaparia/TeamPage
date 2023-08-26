import './Person.css'

export default function Person({image,name,university}) {
    // console.log("image=",image);
    return (
        <div className="member">
        <img width={200} height={200} src={image}/>
        <div className="description">
            <h1>{name}</h1>
            <h2>{university}</h2>
            
        </div>
      </div>
  );
}
