import React, { useEffect } from "react";
import board from "../assets/images/board.jpg";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
function Board() {
  const axiosPrivate = useAxiosPrivate();
  const [teams, setTeams] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      document.title = "Bảng xếp hạng";

      try {
        // Get all teams from API
        const res = await axiosPrivate.get("/team/getTeamList");
        if (res.status === 200) {
          setTeams(res.data.result);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the async function

    // If you have any cleanup logic, you can return a function
    // For example: return () => { /* cleanup logic */ };
  }, []);

  return (
    <div>
      <div className="text-center" style={{ backgroundColor: `#ffcc07c9` }}>
        <img src={board} style={{ height: "50vh" }} />
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
          {teams.map((team, index) => (
            <tr>
              <td className="text-xl text-center flex-shrink-0">🏆🥇</td>
              <td className="whitespace-nowrap text-center items-center px-3 py-5 text-sm text-gray-500">
                <div className="mt-1 text-gray-500">{team.name}</div>
              </td>
              <td className="whitespace-nowrap px-3 py-5 text-sm text-center text-gray-600">
                {team.statistics && team.statistics.joinedGame}
              </td>
              <td className="whitespace-nowrap px-3 py-5 text-sm text-center text-gray-600">
                {team.statistics && team.statistics.wonGame}
              </td>
              <td className="whitespace-nowrap px-3 py-5 text-sm text-center text-gray-600">
                {team.statistics && team.statistics.drawGame}
              </td>
              <td className="whitespace-nowrap px-3 py-5 text-sm text-center text-gray-600">
                {team.statistics && team.statistics.lostGame}
              </td>
              <td className="whitespace-nowrap px-3 py-5 text-sm text-center text-gray-600">
                {team.skilllevel}<span className="text-sm text-gray-300">/100</span>
              </td>
              <td className="whitespace-nowrap px-3 py-5 text-sm text-center text-gray-600">
                {100 - team.legitpoint}
              </td>
              <td className="whitespace-nowrap px-3 py-5 text-sm text-center text-gray-600">
                {team.statistics && (team.skilllevel + team.legitpoint)} 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Board;
