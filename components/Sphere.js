import { Html, MeshDistortMaterial, Sparkles } from "@react-three/drei";

export default function Sphere({
  isDesktop,
  isHomepage,
  color,
  text,
  router,
  setIsClicked,
  ...props
}) {
  const homepageProps = {
    amount: 50,
    size: isDesktop ? 10 : 8,
    fontSize: isDesktop ? "1rem" : ".7rem",
  };

  const nonHomepageProps = {
    amount: 50,
    size: 5,
    fontSize: ".6rem",
  };

  function handleClick() {
    switch (text) {
      case "Projects":
        if (isHomepage) {
          setIsClicked(true);
          setTimeout(() => {
            router.push("/projects");
          }, 2000);
        } else router.push("/projects");
        break;
      case "Home":
        router.push("/");
        break;
      case "About":
        if (isHomepage) {
          setIsClicked(true);
          setTimeout(() => {
            router.push("/about");
          }, 2000);
        } else router.push("/about");
        break;
      case "Contact":
        if (isHomepage) {
          setIsClicked(true);
          setTimeout(() => {
            router.push("/contact");
          }, 2000);
        } else router.push("/contact");
        break;
      default:
        break;
    }
  }

  return (
    <mesh {...props} scale={0.05}>
      <Html center={true}>
        <span
          style={{
            fontSize: `${
              isHomepage ? homepageProps.fontSize : nonHomepageProps.fontSize
            }`,
          }}
          onClick={(event) => handleClick(event)}
        >
          {text}
        </span>
      </Html>
      <sphereGeometry
        args={[isHomepage ? homepageProps.size : nonHomepageProps.size, 64, 64]}
      />
      <meshPhysicalMaterial roughness={0} color={color} envMapIntensity={0.2} />
      <Sparkles count={5} size={5} scale={50} noise={0.1} />
      <MeshDistortMaterial distort={0.75} speed={1} color={color} />
    </mesh>
  );
}
