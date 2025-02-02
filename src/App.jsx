export default function App() {
  return (
    <div className="card flex items-center justify-center min-h-screen bg-gray-200 ">
      <div className="card1 box-border h-130 w-104 bg-gray-200 drop-shadow-2xl rounded-4xl">
        <div className="boxA w-92 h-14 rounded-4xl bg-transparent border-1 border-gray-300 shadow-sm flex flex-row items-center gap-3 my-6 mx-6">
          <div className="round size-8 rounded-4xl bg-linear-45 from-blue-500 via-purple-500 to-pink-500 ml-4"></div>
          <div className="add mr-18">
            <p className="text-[10px] text-gray-600">Address</p>
            <p className="text-[13px] font-medium">0xC02A...3A28</p>
          </div>
          <div className="icons flex gap-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-copy"
            >
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-scan-line"
            >
              <path d="M3 7V5a2 2 0 0 1 2-2h2" />
              <path d="M17 3h2a2 2 0 0 1 2 2v2" />
              <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
              <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
              <path d="M7 12h10" />
            </svg>
            <p className="text-gray-300 mb-1">|</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-share"
            >
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <polyline points="16 6 12 2 8 6" />
              <line x1="12" x2="12" y1="2" y2="15" />
            </svg>
          </div>
        </div>
        <div className="boxB w-92 h-88 bg-transparent border-1 border-gray-300 shadow-sm mx-6 rounded-4xl ">
          <div className="boxglow w-88 h-68 bg-gray-50 shadow-2xl mx-2 my-2 shadow-gray-50 rounded-4xl ">
            <div className="top flex flex-row mx-6 items-center">
              <p className="mr-27 my-3 text-[13px] font-medium">Swap</p>
              <div className="flex flex-row items-center gap-4">
                <p className="text-[10px] text-gray-600 my-4">
                  Slippage: <span className="text-black">8%</span>
                </p>
                <p className="text-gray-300 mb-1 text-[12px]">|</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-bolt"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </div>
            </div>
            <div className="w-80 bg-gray-200 h-[1.5px] ml-4 mb-4"></div>

            <div className="swap1 w-80 h-20 mx-4 mb-4 rounded-2xl bg-transparent border-1 border-gray-300 shadow-sm flex flex-col ">
              <div className="row1 flex flex-row my-2 justify-center">
                <h1 className="text-2xl font-medium mr-40">0.00</h1>
                <div className="w-22 h-7 rounded-xl bg-gray-300 flex flex-row justify-center items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Ethereum"
                    role="img"
                    viewBox="0 0 512 512"
                    width="22px"
                    height="22px"
                    fill="none"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <rect width="0" height="0" rx="15%" fill="#ffffff"></rect>
                      <path fill="#3C3C3B" d="m256 362v107l131-185z"></path>
                      <path
                        fill="#343434"
                        d="m256 41l131 218-131 78-132-78"
                      ></path>
                      <path
                        fill="#8C8C8C"
                        d="m256 41v158l-132 60m0 25l132 78v107"
                      ></path>
                      <path fill="#141414" d="m256 199v138l131-78"></path>
                      <path fill="#393939" d="m124 259l132-60v138"></path>
                    </g>
                  </svg>
                  <p className="text-[10px] font-medium mr-5 ">ETH</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-chevron-right"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>
              <div className="row2 flex flex-row justify-center">
                <p className="text-[10px] mr-52">$0.00</p>
                <p className="text-[10px] text-gray-600">
                  Balance: <span className="text-green-600">0.69</span>
                </p>
              </div>
            </div>
            <div className="mid round size-8 rounded-4xl bg-gray-50 border-1 border-gray-300 shadow-sm mx-38 absolute bottom-60 z-10 px-1 py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#070070"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-down-up"
              >
                <path d="m3 16 4 4 4-4" />
                <path d="M7 20V4" />
                <path d="m21 8-4-4-4 4" />
                <path d="M17 4v16" />
              </svg>
            </div>
            <div className="swap2 w-80 h-20 mx-4 rounded-2xl bg-transparent border-1 border-gray-300 shadow-sm flex flex-col ">
              <div className="row1 flex flex-row my-2 justify-center">
                <h1 className="text-2xl font-medium mr-40">0.00</h1>
                <div className="w-22 h-7 rounded-xl bg-gray-300 flex flex-row justify-center items-center ">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="15px"
                    height="15px"
                    viewBox="0 0 226.777 226.777"
                    enable-background="new 0 0 226.777 226.777"
                    xml:space="preserve"
                    fill="#00803e"
                    stroke="#00803e"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill="#03b056"
                        d="M226.883,107.66c0-14.245-38.761-26.13-90.27-28.872l-0.004-22.697h64.315V8.855H25.06v47.236h64.31v22.808 C38.799,81.829,0.97,93.59,0.97,107.66c0,14.072,37.829,25.834,88.4,28.759v81.504h47.239V136.53 C188.122,133.794,226.883,121.905,226.883,107.66z M113.926,121.693c-55.288,0-100.109-8.557-100.109-19.119 c0-8.943,32.139-16.451,75.553-18.54v5.383h0.005v22.059c7.827,0.439,16.053,0.669,24.551,0.669c7.825,0,15.424-0.199,22.688-0.563 V83.952c44.355,1.961,77.423,9.548,77.423,18.622C214.036,113.136,169.214,121.693,113.926,121.693z"
                      ></path>{" "}
                    </g>
                  </svg>
                  <p className="text-[10px] font-medium mr-4 ml-1">USDT</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-chevron-right"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>
              <div className="row2 flex flex-row justify-center">
                <p className="text-[10px] mr-47">$0.00</p>
                <p className="text-[10px] text-gray-600">
                  Balance: <span className="text-green-600">1,187.16</span>
                </p>
              </div>
            </div>
          </div>

          <div className="swipe h-14 w-89 ml-[5.3px] bg-gray-300 rounded-b-4xl rounded-t-xl px-1 flex flex-row items-center">
            <div className="h-12 w-16 bg-gray-50 rounded-bl-4xl rounded-t-md rounded-br-md px-5">
              <div className="mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-move-right"
                >
                  <path d="M18 8L22 12L18 16" />
                  <path d="M2 12H22" />
                </svg>
              </div>
            </div>
            <p className="ml-18">Slide To Swap</p>
          </div>
        </div>
        <div className="last w-20 h-2 rounded-2xl bg-gray-300 mx-44 mt-12"></div>
      </div>
    </div>
  );
}
