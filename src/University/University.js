import './University.css'

export default function University({image,name,country,description}) {
    console.log("image=",image);
    return (
    <div className="member" >
        <img width={400} height={400} src={image} alt="university"
        />
        <div className="description">
            <h1>{name}</h1>
            <h2>{country}</h2>
            <p>
            {description}
            </p>
        </div>
    </div>
  );
}
