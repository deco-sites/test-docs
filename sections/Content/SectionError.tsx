import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Header from "$store/components/ui/SectionHeader.tsx";
import { Children } from "preact/compat";
import { type loaderObject } from "../../loaders/LoaderError.tsx";
// import loader from "../../loaders/LoaderError.tsx";
// export { loader };

export interface Props {
  thing: loaderObject;
}

export default function Benefits(
  props: Props,
) {
  // return (<div>OKAY</div>);
  return <div>Ola, tudo bem {props.thing} </div>;
}
