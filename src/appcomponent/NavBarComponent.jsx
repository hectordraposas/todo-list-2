import ActionComponent from "./navbarcomponent/ActionComponent";

const NavBarComponent = () => {
  return (
    <div className="md:w-[80%] w-full mx-auto md:p-5 p-2 rounded-sm md:mt-5 mt-2 flex items-center justify-between text-amber-50 cursor-pointer transition-all">
      <figure className="cursor-pointer font-semibold">Todo List</figure>

      <ActionComponent />
    </div>
  );
};

export default NavBarComponent;
