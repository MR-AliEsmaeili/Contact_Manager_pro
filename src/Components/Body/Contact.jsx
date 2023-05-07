import {IoIosEye, IoIosTrash, IoMdCreate} from 'react-icons/io'

const Contact = () => {
  return (
    <div class="p-4 ">
      <div className="flex rounded-lg h-full bg-gray-500 p-8  max-sm:flex-col">
        <div className="flex items-center justify-center mb-3">
          <div className="w-48 h-48  inline-flex items-center justify-center rounded-full bg-indigo-300 text-white flex-shrink-0">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4128/4128349.png"
              alt=""
              className="max-sm:h-32 max-sm:px-6 hover:rounded-se-2xl duration-300"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between flex-grow mr-3">
          <ul className="space-y-2 max-sm:w-fit max-sm:text-sm ">
            <li className="bg-orange-100 p-1 rounded-2xl text-center shadow-sm">
              نام و نام خانوادگی :<hr />
              <p className="">علی اسماعیلی</p>
            </li>
            <li className="bg-orange-100 p-1 rounded-2xl text-center shadow-sm">
              شماره تماس :<hr className="text-gray-900" />
              <p>09121234567</p>
            </li>
            <li className="bg-orange-100 p-1 rounded-2xl text-center shadow-sm">
              آدرس ایمیل :<hr className="text-gray-900" />{' '}
              <p>ali.esmaeili.online@gmail.com</p>
            </li>
          </ul>
        </div>
        <div className=" flex items-center justify-center m-3 sm:flex-col gap-y-2 gap-x-2">
          <button className="block hover:shadow-gray-50 max-sm:mx-2 max-sm:inline shadow-sm bg-indigo-400 rounded-lg text-white p-2 hover:rounded-2xl duration-500">
            <IoIosEye />
          </button>
          <button className="block hover:shadow-gray-50 max-sm:mx-2 max-sm:inline shadow-sm bg-yellow-400 rounded-lg text-white p-2 hover:rounded-2xl duration-500">
            <IoMdCreate />
          </button>
          <button className="block hover:shadow-gray-50 max-sm:mx-2 max-sm:inline shadow-sm bg-red-500 rounded-lg text-white p-2 hover:rounded-2xl duration-500">
            <IoIosTrash />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact