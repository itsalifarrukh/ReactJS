import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/itsalifarrukh")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <>
      <div className="flex justify-center">
        <img src={data.avatar_url} alt="Git Profile" width={200} className="" />
      </div>
      <div className="text-center m-5 p-5 bg-gray-600 text-white">
        Name: {data.name}
      </div>
      <div className="text-center m-5 p-5 bg-gray-600 text-white">
        Github Followers: {data.followers}
      </div>
      <div className="text-center m-5 p-5 bg-gray-600 text-white">
        Github Repos: {data.public_repos}
      </div>
      <div className="text-center m-5 p-5 bg-gray-600 text-white">
        Github Profile Link: {data.html_url}
      </div>
      <div className="text-center m-5 p-5 bg-gray-600 text-white">
        Github Repositries Link: {data.repos_url}
      </div>
      <div className="text-center m-5 p-5 bg-gray-600 text-white">
        Github Profile Type: {data.type}
      </div>
      <div className="text-center m-5 p-5 bg-gray-600 text-white">
        Github Profile Bio: {data.bio}
      </div>
      <div className="text-center m-5 p-5 bg-gray-600 text-white">
        Github Profile Email: {data.email}
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/itsalifarrukh");
  return response.json();
};

// profileName
// profileFollowers
// profileRepos
// profileLink
// repositoriesLink
// profileType
// profileBio
// profileEmail
