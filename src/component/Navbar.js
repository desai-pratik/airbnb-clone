import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./MenuItem";
import useRegisterModal from "../hooks/useRegisterModal";
import useLoginModal from "../hooks/useLoginModal";
import useRantModal from "../hooks/useRantModal";
import { useNavigate } from "react-router-dom";
import Categories from "./Categories";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rantModal = useRantModal();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  });

  const onRant = useCallback(() => {
    rantModal.onOpen();
  }, [loginModal, rantModal]);

  const navigate = useNavigate();

  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <img src="/images/logo.png" width="100" height="100" className="hidden md:block cursor-pointer" alt="" />
            <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
              <div className="flex flex-row items-center justify-between">
                <div className="text-sm font-semibold px-6">Anywhere</div>
                <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">Any Week</div>
                <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
                  <div className="hidden sm:block">add Guests</div>
                  <div className="p-2 bg-rose-500 rounded-full text-white">
                    <BiSearch size={18} />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="flex flex-row items-center gap-3">
                <div
                  onClick={onRant}
                  className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
                >
                  Airbnb your home
                </div>
                <div
                  onClick={toggleOpen}
                  className="p-4 md:py-1 md:px-2 border=[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                >
                  <AiOutlineMenu />
                  <div className="hidden md:block">
                    <img src="/images/placeholder.jpg" className="rounded-full" width="30" height="30" alt="" />
                  </div>
                </div>
              </div>

              {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
                  <div className="flex flex-col cursor-pointer">
                    <MenuItem label="My trips" onClick={() => navigate("/trips")} />
                    <MenuItem label="My favorites" onClick={() => navigate("/favorites")} />
                    <MenuItem label="My reservations" onClick={() => navigate("/reservations")} />
                    <MenuItem label="My properties" onClick={() => navigate("/properties")} />
                    <MenuItem label="Airbnb your home" onClick={rantModal.onOpen} />
                    <hr />
                    <MenuItem label="Logout" onClick={() => {}} />

                    <MenuItem onClick={loginModal.onOpen} label="Log in" />
                    <MenuItem onClick={registerModal.onOpen} label="Sign up" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;
