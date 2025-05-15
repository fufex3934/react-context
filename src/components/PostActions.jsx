import { Can } from "@casl/react";
import { useAbility } from "../context/AbilityContext";

const PostActions = () => {
  const ability = useAbility();
 
  return (
    <div>
      <h1>Post</h1>
      <Can I={"update"} a={"Post"} ability={ability}>
        <button>Edit Post</button>
      </Can>
      <Can I={"delete"} a={"Post"} ability={ability}>
        <button>Delete Post</button>
      </Can>
      <Can I={"read"} a={"Post"} ability={ability}>
        <button>Read Post</button>
      </Can>
    </div>
  );
};

export default PostActions;
