import dynamic from "next/dynamic";
const DynamicComponent = dynamic(() => import("./test"), { ssr: false });

export default () => (
  <div>
    <DynamicComponent />
    <p>HOME PAGE is here!</p>
  </div>
);
