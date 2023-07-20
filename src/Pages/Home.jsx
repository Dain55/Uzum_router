import Item from "../components/item";
const Home = () => {
    return (
      <>
        <div className="m-auto w-[70%]">
          <div className="flex mt-5 justify-center">
            <img
              src="https://images.uzum.uz/cfqov5nhj8j9g69850s0/main_page_banner.jpg"
              alt=""/>
          </div>
          <Item/>
        </div>
    
      </>
    );
}

export default Home