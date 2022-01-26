import { useContext, Fragment } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { UserCircleIcon } from "@heroicons/react/outline";
import { Transition, Menu } from "@headlessui/react";
import { auth } from "../../firebase";
import { useHistory } from "react-router";

const DashboardHeader = () => {
  const { user } = useContext(AuthContext);

  const history = useHistory();

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="flex items-center justify-between w-full py-6 px-16">
      <div className="flex items-center justify-start">
        <img
          className="h-8 w-auto sm:h-10 mr-4"
          src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
        />
        <span className="text-xl">Weee.tk</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="cursor-pointer">Home</div>
      </div>
      <div className="flex items-center px-8">
        <Menu as="div" className="relative inline-block text-left">
          {({ open }) => (
            <>
              <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-full border border-gray-300 shadow-sm px-1 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                  <UserCircleIcon className="h-6 w-6" aria-hidden="true" />
                </Menu.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  {" "}
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <span
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 text-sm py-10"
                          )}
                        >
                          <div className="flex flex-col items-center justify-center">
                            <div className="h-10 w-10">
                              <img
                                src={user?.photoURL as string}
                                alt=""
                                className="rounded-full"
                              />
                            </div>
                            <div className="text-base font-semibold mt-2">
                              {user?.displayName
                                ? user.displayName
                                : user?.email?.split("@")[0]}
                            </div>
                            <div className="text-gray-500">{user?.email}</div>
                            <button
                              type="submit"
                              className="my-4 px-4 py-2 bg-white rounded shadow hover:bg-blue-500 hover:text-white font-semibold transition duration-300 ease-in-out"
                              onClick={async () => {
                                await auth.signOut();
                                history.push("/");
                              }}
                            >
                              Logout
                            </button>
                          </div>
                        </span>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </div>
  );
};

export default DashboardHeader;
