import "./Video.css";

export default function Video({ title, channelname, views, time,verified,id }) {
  //you can directly
  //destructure the props you can also use "props.title" as well
  let thumbnailstyle = "thumbnail-size";
  console.log(title)
  return (
    <div className="container">
      <div>
        <img
          src={`https://picsum.photos/id/${id}/160/90`}
          alt={title}
          className={thumbnailstyle}
        ></img>
        {verified?<p className="channel-style text-style">{channelname} ✅ </p>:<p className="channel-style text-style">{channelname}</p>}
        <p className="text-style title">{title}</p>
        <div className="views text-style channel-style">
          {views} views <span>.</span> {time}
        </div>
      </div>
    </div>
  );
}
