import Todo from "./Todo";

const TodoContainer = () => {
	return (
		<div className="w-full h-full min-h-screen min-w-[300px] px-2 pb-6 bg-light-bodyBackground dark:bg-dark-bodyBackground bg-[url('/src/assets/images/bg-mobile-light.jpg')] dark:bg-[url('/src/assets/images/bg-mobile-dark.jpg')] md:bg-[url('/src/assets/images/bg-desktop-light.jpg')] dark:md:bg-[url('/src/assets/images/bg-desktop-dark.jpg')]  bg-no-repeat bg-40">
      {/* Todo */}
      {/* <section className="w-full h-full flex items-center justify-center"> */}
      <section className="w-full h-full flex justify-center pt-20">
        <Todo />
      </section>
		</div>
	);
};

export default TodoContainer;
