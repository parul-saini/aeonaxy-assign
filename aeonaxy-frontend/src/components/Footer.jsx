import logo from "../assets/logo.png"

function Footer() {
  return (
    

<footer className="bg-gray-100">
    <div className="mx-auto w-full  lg:p-10 lg:py-8">
        <div className="lg:flex ">
          <div className="mb-6 lg:w-1/5 ps-5 sm:ps-10 text-xs md:text-sm  ">
              <img src={logo}  className="mr-3 lg:h-20 h-14" alt="Dribble Logo" />
              <div className="sm:text-sm text-xs mb-5">
                Dribble is the world&apos;s leading community for creatives to share, grow and get hired.
              </div>
              <div className="flex mt-4  sm:mt-0 align-bottom">
              <a href="#" className="text-gray-700 hover:text-gray-900  ">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clipRule="evenodd"/>
                </svg>
                  <span className="sr-only">Dribbble account</span>
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900  ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 12">
                    <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd"/>
                </svg>
                  <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900  ms-5">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="18" viewBox="0,0,256,256">
                        <g fill="#374151" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" fontWeight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(5.12,5.12)"><path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM37,19h-2c-2.14,0 -3,0.5 -3,2v3h5l-1,5h-4v15h-5v-15h-4v-5h4v-3c0,-4 2,-7 6,-7c2.9,0 4,1 4,1z"></path></g></g>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900  ms-5">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="23" height="21" viewBox="0,0,256,256">
                    <g fill="#374151" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(8,8)"><path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path></g></g>
                </svg>
                  <span className="sr-only">Instagram page</span>
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900  ms-5">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
                <g fill="#374151" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.084 3.163,9.426 7.627,11.174c-0.105,-0.949 -0.2,-2.406 0.042,-3.442c0.218,-0.936 1.407,-5.965 1.407,-5.965c0,0 -0.359,-0.719 -0.359,-1.781c0,-1.669 0.967,-2.914 2.171,-2.914c1.024,0 1.518,0.769 1.518,1.69c0,1.03 -0.655,2.569 -0.994,3.995c-0.283,1.195 0.599,2.169 1.777,2.169c2.133,0 3.772,-2.249 3.772,-5.495c0,-2.873 -2.064,-4.882 -5.012,-4.882c-3.414,0 -5.418,2.561 -5.418,5.208c0,1.031 0.397,2.137 0.893,2.739c0.098,0.119 0.112,0.223 0.083,0.344c-0.091,0.379 -0.293,1.194 -0.333,1.361c-0.052,0.22 -0.174,0.266 -0.401,0.16c-1.499,-0.698 -2.436,-2.889 -2.436,-4.649c0,-3.785 2.75,-7.262 7.929,-7.262c4.163,0 7.398,2.966 7.398,6.931c0,4.136 -2.608,7.464 -6.227,7.464c-1.216,0 -2.359,-0.632 -2.75,-1.378c0,0 -0.602,2.291 -0.748,2.853c-0.271,1.042 -1.002,2.349 -1.492,3.146c1.123,0.346 2.316,0.534 3.553,0.534c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12z"></path></g></g>
             </svg>
                  <span className="sr-only">Pinterest page</span>
              </a>
              
             
          </div>
          </div>
          <div className="mx-5 sm:mx-10 grid-cols-3 lg:ms-20 grid md:grid-cols-5 gap-6 ">
              <div>
                  <h2 className="mb-4 text-xs sm:text-sm font-semibold text-gray-900 ">Resources</h2>
                  <ul className="text-gray-600 font-medium text-xs ">
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Go Pro!</a>
                      </li>
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Explore design work</a>
                      </li>
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Design blog</a>
                      </li>
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Overtime podcast</a>
                      </li>
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Explore design work</a>
                      </li>
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Playoffs</a>
                      </li>
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Weekly Warm-up</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-4 text-xs sm:text-sm font-semibold text-gray-900 ">Hire Designers</h2>
                  <ul className="text-gray-600 font-medium text-xs ">
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Post a job opening</a>
                      </li>
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Post a freelance project</a>
                      </li>
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Seach for designers</a>
                      </li>
                      <h2 className="mb-4 text-xs sm:text-sm font-semibold text-gray-900 ">Brands</h2>
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Advertise with us</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-4 text-xs sm:text-sm font-semibold text-gray-900 ">Company</h2>
                  <ul className="text-gray-600 font-medium text-xs ">
                      <li className="mb-3">
                          <a href="#" className="hover:underline">About</a>
                      </li>
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Careers</a>
                      </li>
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Support</a>
                      </li>
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Media kit</a>
                      </li>
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Testimonials</a>
                      </li>
                      <li className="mb-3">
                          <a href="#" className="hover:underline">API</a>
                      </li>
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Terms of service</a>
                      </li>
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Cookie policy</a>
                      </li>
                  </ul>
              </div>
              <div className="col-span-2 md:col-auto">
                  <h2 className="mb-4 text-xs sm:text-sm font-semibold text-gray-900 ">Directories</h2>
                  <ul className="text-gray-600 font-medium text-xs ">
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Design jobs</a>
                      </li>
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Designers for hire</a>
                      </li>
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Freelance designers for hire</a>
                      </li>
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Tags</a>
                      </li>
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Places</a>
                      </li>
                      <h2 className="mb-4 text-xs sm:text-sm font-semibold text-gray-900 ">Design assets</h2>
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Dribble Marketplace</a>
                      </li>
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Creative Market</a>
                      </li>
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Fontspring</a>
                      </li>
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Font Squirrel</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-4 text-xs sm:text-sm font-semibold text-gray-900 ">Design Resources</h2>
                  <ul className="text-gray-600 font-medium text-xs ">
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Freelancing</a>
                      </li>
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Desing Hiring</a>
                      </li>
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Design Portfolio</a>
                      </li>
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Design Education</a>
                      </li>
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Creative Process</a>
                      </li>
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Design Industry</a>
                      </li>
                      <li className="mb-3">
                          <a href="#" className="hover:underline">Terms of service</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between text-xs m-3">
          <span className="text-gray-500 sm:text-center dark:text-gray-400">© 2023 Dribble. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <span className="font-bold">20,501,853 </span> <span className="text-gray-500"> shots dribbled</span>
            <a href="#" className="text-gray-500 hover:text-gray-900 ms-2">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#c52864" viewBox="0 0 20 20">
                    <path  d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" />
                </svg>
                <span className="sr-only">Dribbble account</span>
            </a>
          </div>
      </div>
    </div>
</footer>

  )
}

export default Footer