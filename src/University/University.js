import './University.css'

export default function University({image,name,country,description}) {
    // console.log("image=",image);
    return (
    <div className="member" >
        <img width={400} height={400} src={image}
        onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src="https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg";
          }}
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
