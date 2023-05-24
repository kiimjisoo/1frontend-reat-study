import Avatar from "./Avatar"; // ctrl + spase + 클릭 

function UserInfo(props) {
  return (
    <div className="user-info">
      <Avatar user={props.user} />
      <div className="user-info-name">
        {props.user.name}
      </div>
    </div>
  );
}
export default UserInfo;