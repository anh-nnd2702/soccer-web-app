import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);
library.add(fas);
library.add(far);

const Icon = (props) => {
  const { name, type = "fa-solid", size = "sm" } = props;
  return <FontAwesomeIcon icon={[type, name]} size={size} {...props} />;
};

export default Icon;
