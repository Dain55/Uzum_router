import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <div className="h-8 bg-[#F4F5F5] ">
          <div className="m-auto w-[92%] flex justify-evenly items-center">
          <div className="flex gap-[10px]">
            <nav>Город:Ташкент</nav>
            <nav>Пункты выдачи</nav>
          </div>
          <div>
            <nav>Доставим ваш заказ бесплатно — всего за 1 день!</nav>
          </div>
          <div className="flex gap-[10px]">
            <nav>Вопрос-ответ</nav>
            <nav>Мои заказы</nav>
            <nav>Русский</nav>
          </div>
        </div>
        </div>




        <div className="m-auto w-[81%] flex justify-evenly mt-5 items-center">
          <div className="flex gap-[20px]">
            <img src="/icons/logo.svg" alt="" />
            <button className="h-10 text-indigo-600 border-solid rounded-lg border-2 border-indigo-600 w-24 bg-[#EAEAF9]">
              Каталог
            </button>
          </div>
          <div className="flex items-center">
          
            <input
              placeholder="Искать товары или категории"
              className=" h-11 w-[400px] 
              p-2
              borde-solid
              border-y-4
              border-l-4
              border-[gray]"
              type="text"
            />
            <div className=" flex h-11 justify-center border-0 border-y-4 border-r-4 border-[gray] w-20 bg-[#EAEAF9]">
              <img className="mt-1 h-6 " src="/icons/search.svg" alt="" />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex">
                <img  className="h-8" src="/icons/Human.svg" alt="" />
                <p>Войти</p>
            </div>
            <div className="flex">
                <img className="h-8" src="/icons/heart.svg" alt="" />
                <p>Избранное</p>
            </div>
            <div className="flex">
                <img className="h-8" src="/icons/Shop.svg" alt="" />
                <p>Корзина</p>
            </div>
          </div>
        </div>
        <div className="m-auto w-[72%] flex justify-evenly mt-5 gap-[15px]">
            <nav>Халяльная рассрочка</nav>
            <nav>Электроника</nav>
            <nav>Бытовая техника</nav>
            <nav>Одежда</nav>
            <nav>Обувь</nav>
            <nav>Аксессуары</nav>
            <nav>Красота</nav>
            <nav>Здоровье</nav>
            <nav>Товары для дома</nav>
            <nav>Строительство и ремонт</nav>
            <nav>Еще</nav>
        </div>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <div className="mt-[100px]">
            <div className="bg-[#d8d8d8] h-96">
              <div className="mt-[10px]">
             <div className="m-auto w-[83%] mt-[10] flex justify-around">
              <div>
                <nav>О нас</nav>
                <br></br>
                <nav>Пункты выдачи</nav>
                <br></br>
                <nav>Вакансии</nav>
              </div>
              <div>
              <nav>Пользователям</nav>
              <br></br>
                <nav>Связаться с нами</nav>
                <br></br>
                <nav>Вопрос - Ответ</nav>
              </div>
              <div>
              <nav>Для предпринимателей</nav>
              <br></br>
                <nav>Продавайте на Uzum</nav>
                <br></br>
                <nav>Вход для продавцов</nav>
              </div>
              <div>
                <nav>Скачать приложения</nav>
                <div className="flex mt-5">
                   <img src="/icons/googlePlay.svg" alt="" />
                   <img src="/icons/AppStore.svg" alt="" />
                </div>
              </div>
              </div>
             </div>
            </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
