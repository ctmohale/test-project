import React, { useEffect, useState, useRef } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenuRight } from "react-icons/cg";

function Nav() {
  const [bgColor, setBgColor] = useState("transparent");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setBgColor("#0A202B"); // Change to red on scroll
    } else {
      setBgColor("transparent"); // Reset to transparent at the top
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`navigation fixed-top`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="grid grid-cols-4 grid-rows-1 gap-1">
        <div className="pt-2">
          <svg
            width="150"
            height="44"
            viewBox="0 0 150 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_10806)">
              <path
                d="M31.8508 35.915L33.9592 41.5093L36.0637 35.915H36.9572L33.9592 43.691L30.9613 35.915H31.8508Z"
                fill="white"
              />
              <path
                d="M49.5453 35.9152V43.2532H48.7194V35.9152H49.5453Z"
                fill="white"
              />
              <path
                d="M63.5449 35.915C64.2219 35.915 64.8056 36.0176 65.296 36.2228C65.7854 36.4259 66.1934 36.7001 66.519 37.0473C66.8466 37.3945 67.0888 37.787 67.2457 38.223C67.4015 38.6569 67.4799 39.1205 67.4799 39.6117C67.4799 40.2429 67.334 40.8297 67.0431 41.3712C66.7543 41.9137 66.3254 42.3634 65.7566 42.7205C65.1898 43.0755 64.4482 43.2531 63.533 43.2531H61.9844V35.915H63.5449ZM63.5925 42.4956C64.0422 42.4956 64.4502 42.4285 64.8155 42.2944C65.1828 42.1602 65.5074 41.961 65.7884 41.6947C66.0683 41.4294 66.2827 41.1128 66.4316 40.7439C66.5825 40.3731 66.658 39.9865 66.658 39.584C66.658 39.0534 66.5389 38.5721 66.3006 38.1401C66.0624 37.7091 65.7219 37.357 65.2801 37.0828C64.8404 36.8096 64.2487 36.6725 63.5052 36.6725H62.8103V42.4956H63.5925Z"
                fill="white"
              />
              <path
                d="M83.3975 35.915V36.6725H80.3916V38.8542H83.3101V39.6117H80.3916V42.4956H83.3975V43.2531H79.5657V35.915H83.3975Z"
                fill="white"
              />
              <path
                d="M95.3713 39.5904C95.3713 38.9177 95.5421 38.2885 95.8836 37.7046C96.227 37.1207 96.6956 36.6552 97.2892 36.308C97.8848 35.9608 98.5281 35.7872 99.219 35.7872C99.904 35.7872 100.542 35.9559 101.133 36.2922C101.726 36.6295 102.197 37.0931 102.547 37.6849C102.896 38.2747 103.071 38.9098 103.071 39.5904C103.071 40.267 102.898 40.8962 102.554 41.4801C102.213 42.064 101.745 42.5276 101.153 42.8688C100.562 43.2081 99.9179 43.3777 99.219 43.3777C98.5331 43.3777 97.8928 43.2101 97.2972 42.8728C96.7035 42.5364 96.234 42.0748 95.8875 41.488C95.5431 40.8992 95.3713 40.267 95.3713 39.5904ZM99.2111 36.5447C98.6631 36.5447 98.1558 36.6848 97.6903 36.9629C97.2267 37.242 96.8614 37.6138 96.5943 38.0794C96.3263 38.5429 96.1933 39.044 96.1933 39.5825C96.1933 40.122 96.3293 40.626 96.6023 41.0935C96.8773 41.559 97.2475 41.9299 97.7141 42.206C98.1826 42.4822 98.684 42.6203 99.219 42.6203C99.761 42.6203 100.269 42.4812 100.744 42.2021C101.217 41.921 101.587 41.5472 101.852 41.0817C102.116 40.6141 102.249 40.1141 102.249 39.5825C102.249 39.0381 102.112 38.5311 101.84 38.0596C101.57 37.5892 101.2 37.2193 100.732 36.9511C100.265 36.6808 99.759 36.5447 99.2111 36.5447Z"
                fill="white"
              />
              <path
                d="M118.477 37.3456C118.315 37.0595 118.134 36.8544 117.933 36.7301C117.734 36.6068 117.494 36.5447 117.214 36.5447C116.854 36.5447 116.557 36.6552 116.325 36.8761C116.095 37.097 115.979 37.3673 115.979 37.6849C115.979 37.9324 116.076 38.1445 116.269 38.32C116.462 38.4936 116.695 38.6425 116.968 38.7658C117.243 38.8901 117.492 38.9976 117.715 39.0893C117.937 39.1791 118.195 39.3142 118.489 39.4957C118.783 39.6772 119.007 39.905 119.164 40.1782C119.32 40.4494 119.398 40.7601 119.398 41.1093C119.398 41.5117 119.296 41.8894 119.092 42.2415C118.891 42.5917 118.61 42.8688 118.251 43.074C117.893 43.2762 117.501 43.3777 117.075 43.3777C116.496 43.3777 115.997 43.2081 115.582 42.8688C115.169 42.5276 114.9 42.064 114.776 41.4801L115.578 41.2552C115.644 41.6576 115.813 41.9871 116.083 42.2415C116.353 42.494 116.676 42.6203 117.055 42.6203C117.468 42.6203 117.824 42.4812 118.124 42.2021C118.425 41.921 118.576 41.5827 118.576 41.1882C118.576 40.839 118.461 40.552 118.231 40.3281C118.002 40.1052 117.585 39.8734 116.976 39.6338C116.37 39.3921 115.914 39.1229 115.61 38.825C115.308 38.5252 115.157 38.1346 115.157 37.6533C115.157 37.1089 115.36 36.6621 115.765 36.3119C116.17 35.9628 116.655 35.7872 117.222 35.7872C117.64 35.7872 118.01 35.8849 118.334 36.0792C118.66 36.2745 118.926 36.5556 119.132 36.9234L118.477 37.3456Z"
                fill="white"
              />
              <path
                d="M4.80466 0.997559V10.5567H13.6158V0.997559H18.3768V25.2643H13.6158V14.419H4.80466V25.2643H0.0437012V0.997559H4.80466Z"
                fill="white"
              />
              <path
                d="M27.2811 0.997559V25.2643H22.5201V0.997559H27.2811Z"
                fill="white"
              />
              <path
                d="M52.8741 7.33686C51.7305 5.6641 50.3536 4.37699 48.7445 3.47453C47.1343 2.57306 45.3693 2.12134 43.4474 2.12134C41.4829 2.12134 39.6415 2.6421 37.9241 3.68363C36.2087 4.72515 34.8527 6.10004 33.858 7.80633C32.8653 9.51064 32.369 11.285 32.369 13.1284C32.369 15.0832 32.8703 16.9138 33.8739 18.62C34.8795 20.3244 36.2345 21.6697 37.94 22.656C39.6474 23.6422 41.4829 24.1354 43.4474 24.1354C45.133 24.1354 46.8077 23.7172 48.4705 22.8808C50.1322 22.0445 51.39 20.9941 52.2427 19.7286C53.0944 18.4642 53.5541 16.898 53.6206 15.0299H44.873V13.5821H55.1771V14.0949C55.1771 16.0044 54.917 17.5982 54.3988 18.8765C53.8797 20.1527 53.0577 21.3057 51.933 22.3364C50.8103 23.3651 49.4929 24.165 47.9821 24.7351C46.4702 25.3032 44.9266 25.5872 43.3521 25.5872C41.1702 25.5872 39.1193 25.0349 37.1974 23.9302C35.2756 22.8236 33.731 21.3146 32.5635 19.4051C31.3981 17.4957 30.8164 15.4363 30.8164 13.227C30.8164 10.9733 31.3822 8.88632 32.5159 6.96601C33.6486 5.04668 35.1972 3.51793 37.1617 2.38172C39.1282 1.24354 41.2566 0.673462 43.5467 0.673462C45.6611 0.673462 47.6148 1.15773 49.4076 2.12528C51.1994 3.09087 52.7758 4.49535 54.1368 6.33873L52.8741 7.33686Z"
                fill="white"
              />
              <path
                d="M59.6097 0.997559H61.1623V11.2945H76.0011V0.997559H77.5537V25.2643H76.0011V12.7463H61.1623V25.2643H59.6097V0.997559Z"
                fill="white"
              />
              <path
                d="M103.985 0.997559V2.44544H95.6898V11.2629H103.758V12.7108H95.6898V25.2643H94.1372V0.997559H103.985Z"
                fill="white"
              />
              <path
                d="M109.166 0.997559H110.719V25.2643H109.166V0.997559Z"
                fill="white"
              />
              <path
                d="M118.66 0.997559L124.521 17.3463H124.589L130.029 0.997559H135.147L125.657 25.9074H122.869L113.542 0.997559H118.66Z"
                fill="white"
              />
              <path
                d="M149.722 0.997559V5.11632H141.852V10.4581H149.432V14.5808H141.852V21.1455H149.722V25.2643H137.091V0.997559H149.722Z"
                fill="white"
              />
              <path
                d="M0.572388 30.9464L150.189 30.9464"
                stroke="white"
                stroke-width="0.585937"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_10806">
                <rect width="150" height="43.5547" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="col-span-2 items-center text-center">
          <button className="btn nav-links">Home</button>
          <button className="btn nav-links">Browse</button>
          <button className="btn nav-links">Pricing</button>
        </div>
        <div className="col-start-4 desktop-view items-right text-right">
          <button className="btn text-[#B4CAD5]">
            <FiShoppingCart size={20} />
          </button>
          <button className="btn login border-solid border-2 border-[#B4CAD5] text-[#B4CAD5]">
            Sign Up
          </button>
          <button
            className="btn sign-up btn-outline bg-[#F4BF31]"
            id="btn-login"
          >
            login
          </button>
        </div>
        <div
          className="col-start-4 mobile-view items-right text-right mt-0 p-0"
          ref={dropdownRef}
        >
          <button
            className="btn p-3 btn-outline bg-[#F4BF31]"
            id="btn-login"
            onClick={toggleDropdown}
          >
            <CgMenuRight size={25} />
          </button>
          <div
            className={`dropdown-menu bg-[#0A202B] top-[10px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-md pt-10 pb-10 transition-all duration-1 ${
              isOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-5"
            }`}
          >
            <div className="p-4">
              <div className="flex flex-col items-start justify-start m-0 p-0">
                <button className="btn text-white justify-start text-left">
                  Home
                </button>
                <button className="btn text-white justify-start text-left">
                  Browse
                </button>
                <button className="btn text-white justify-start text-left">
                  Pricing
                </button>
              </div>
              <br />
              <br />
              <button className="btn text-[#B4CAD5]">
                <FiShoppingCart size={25} />
              </button>
              <button className="btn login border-solid border-2 border-[#B4CAD5] text-[#B4CAD5]">
                Sign Up
              </button>
              <button
                className="btn sign-up btn-outline bg-[#F4BF31]"
                id="btn-login"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
