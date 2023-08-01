import "./App.css";

export default function App() {
  return (
    <div className="App">
  
      <Profile Name="Sid" image="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
      <Profile Name="Madhu" image="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"/>
      <Profile Name="HemaPriya" image="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"/>
    
    </div>
  );
}
function Profile({Name,image}){
  return(
  <div className="profile">
      <img className="pic" src={image}/>
      <h2>hello {Name}</h2>
  </div>
  );
}