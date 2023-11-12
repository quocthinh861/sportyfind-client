import React from "react";
import board from "../assets/images/board.jpg";
function Board() {
  return (
    <div>
      <div className="text-center"
      style={{backgroundColor: `#ffcc07c9`}}
      >
        <img src={board} style={{'height': '50vh'}} />
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead>
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-0"
            >
              Hạng
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
            >
              Tên
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
            >
              Trận
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
            >
              Thắng
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
            >
              Hòa
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
            >
              Thua
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
            >
              Trình độ
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
            >
              Đánh giá trung bình
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
            >
              Tổng đánh giá
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
            >
              Tổng uy tín bị trừ
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
            >
              Điểm xếp hạng
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          <tr>
            <td className="text-xl text-center flex-shrink-0">🏆🥇</td>
            <td className="whitespace-nowrap text-center items-center px-3 py-5 text-sm text-gray-500">
              <img
                className="w-8 pr-1 mx-auto"
                src="https://sporta.s3.ap-southeast-1.amazonaws.com/uploads/production/team/flag/1891/thumb_b0eca5dd-da27-493d-98b7-b708f1692246.jpg?X-Amz-Expires=600&amp;X-Amz-Date=20231029T015530Z&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAIQW3XISBSHKJGJBQ%2F20231029%2Fap-southeast-1%2Fs3%2Faws4_request&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=d48cff60fc7da9fbdad0b9557a10381f21be8d794a53a3a3449ea7747a257e88"
                alt="Team Flag"
              />
              <div className="mt-1 text-gray-500">SVTN VIS</div>
            </td>
            <td className="whitespace-nowrap px-3 py-5 text-sm text-center text-gray-600">
              35
            </td>
            <td className="whitespace-nowrap px-3 py-5 text-sm text-center text-gray-600">
              12
            </td>
            <td className="whitespace-nowrap px-3 py-5 text-sm text-center text-gray-600">
              6
            </td>
            <td className="whitespace-nowrap px-3 py-5 text-sm text-center text-gray-600">
              14
            </td>
            <td className="whitespace-nowrap px-3 py-5 text-sm text-center text-gray-600">
              90<span className="text-sm text-gray-300">/1000</span>
            </td>
            <td className="whitespace-nowrap px-3 py-5 text-sm text-center text-gray-600">
              4.53
            </td>
            <td className="whitespace-nowrap px-3 py-5 text-sm text-center text-gray-600">
              77.0
            </td>
            <td className="whitespace-nowrap px-3 py-5 text-sm text-center text-gray-600">
              0.0
            </td>
            <td className="whitespace-nowrap px-3 py-5 text-sm text-center text-gray-600">
              1698
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Board;
