import Video from "./components/Video";
import "./App.css";
import videos from "./data/data.js";
import Avatar from "./components/avatar"
import "./card.css"
//In address for the module single dot means "present directory"
//double dot means "parent directory"

function Card({children}){
  return(
    <div className="cardd">
      {children}
    </div>
  )
}




function App() {
  return (
    <div className="background">
      {videos.map((video) => (
        <Video
          title={video.title}
          channelname={video.channelname}
          views={video.views}
          time={video.time}
          verified={video.verified}
          id={video.id}
        ></Video>
      ))}
      <Card>
        <Avatar></Avatar>
      </Card>

             
    </div>
  );
}
// //When you defined "props" i.e, title in this context it will go to an object
export default App;
//export {video,thumb} :Here when we are trying to export more
//than one component than we use this ap proach through object where
//key is video and value is video and same for thumb while importing
//it in another file we need destructure them before using it
